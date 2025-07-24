import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './modules/users/user.route';
import postRoutes from './modules/posts/post.routes';
import { initializeDatabase } from './models';
import { swaggerSpec } from './config/swagger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));

const apiPrefix = process.env.API_PREFIX || '/api';
app.use(`${apiPrefix}/users`, userRoutes);
app.use(`${apiPrefix}/posts`, postRoutes);

/**
 * @openapi
 * /health:
 *   get:
 *     tags:
 *       - Health
 *     summary: Health check endpoint
 *     description: Check if the API is running and healthy
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthCheck'
 */
app.get('/health', (_req, res) => {
    res.json({ status: "ok" });
});

// Scalar API Documentation - using dynamic import for ES module
const setupDocs = async () => {
    try {
        // Use eval to prevent TypeScript from transforming the import
        const { apiReference } = await eval('import("@scalar/express-api-reference")');
        app.use('/docs', apiReference({
            spec: {
                content: swaggerSpec,
            },
            theme: 'purple',
            layout: 'modern',
            showSidebar: true,
        }));
        console.log('Scalar API documentation loaded at /docs');
    } catch (error) {
        console.warn('Failed to load Scalar API documentation:', error);
    }
};

// OpenAPI JSON endpoint
app.get('/openapi.json', (_req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

// Initialize database and start server
const startServer = async () => {
    try {
        const dbConnected = await initializeDatabase();
        
        // Setup Scalar documentation
        await setupDocs();
        
        app.listen(PORT, () => {
            console.log(`Server is running on PORT=${PORT}`);
            console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
            console.log(`Database: ${dbConnected ? 'Connected' : 'Disconnected'}`);
            
            if (!dbConnected) {
                console.log('Note: API will use fallback data instead of database.');
            }
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();