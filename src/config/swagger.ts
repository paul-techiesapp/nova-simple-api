import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple API',
      version: '1.0.0',
      description: 'A simple REST API built with Express.js and TypeScript',
      contact: {
        name: 'API Support',
        email: 'support@example.com'
      }
    },
    servers: [
      {
        url: process.env.API_URL || 'http://localhost:3000',
        description: 'Development server'
      }
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['id', 'name', 'email'],
          properties: {
            id: {
              type: 'integer',
              description: 'Unique identifier for the user',
              example: 1
            },
            name: {
              type: 'string',
              description: 'User full name',
              example: 'John Doe'
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'User email address',
              example: 'john.doe@example.com'
            }
          }
        },
        Post: {
          type: 'object',
          required: ['id', 'content', 'userId', 'thumbnail'],
          properties: {
            id: {
              type: 'integer',
              description: 'Unique identifier for the post',
              example: 1
            },
            content: {
              type: 'string',
              description: 'Post content',
              example: 'This is a sample post content'
            },
            userId: {
              type: 'integer',
              description: 'ID of the user who created the post',
              example: 1
            },
            thumbnail: {
              type: 'string',
              description: 'URL of the post thumbnail image',
              example: 'https://example.com/thumbnail.jpg'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Error message',
              example: 'Resource not found'
            }
          }
        },
        HealthCheck: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              description: 'Health status',
              example: 'ok'
            }
          }
        }
      },
      responses: {
        NotFound: {
          description: 'Resource not found',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error'
              }
            }
          }
        },
        ServerError: {
          description: 'Internal server error',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error'
              }
            }
          }
        }
      }
    }
  },
  apis: ['./src/modules/**/*.ts', './src/index.ts'], // paths to files containing OpenAPI definitions
};

export const swaggerSpec = swaggerJSDoc(options);