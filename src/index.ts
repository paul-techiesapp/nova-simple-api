import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './modules/users/user.route';
import postRoutes from './modules/posts/post.routes';
import { initializeDatabase } from './models';

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

app.get('/health', (req, res) => {
    res.json({ status: "ok" });
});

// Initialize database and start server
const startServer = async () => {
    try {
        const dbConnected = await initializeDatabase();
        
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