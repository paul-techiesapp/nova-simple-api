# Simple API

A REST API built with Express.js, TypeScript, and MySQL using Sequelize ORM.

## Prerequisites

- Node.js (v16 or higher)
- pnpm (package manager)
- MySQL database server

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nova-simple-api
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your database credentials:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=simple_api
   DB_USER=your_username
   DB_PASSWORD=your_password
   ```

4. **Database setup**
   
   Create the database:
   ```bash
   mysql -u root -p
   CREATE DATABASE simple_api;
   EXIT;
   ```
   
   Run migrations to create tables:
   ```bash
   npx sequelize-cli db:migrate
   ```
   
   Seed the database with sample data:
   ```bash
   npx sequelize-cli db:seed:all
   ```

## Development Commands

### Running the Application
```bash
pnpm dev          # Start development server with auto-reload
```

The server will run on `http://localhost:3000` by default.

### Database Commands
```bash
# Run migrations
npx sequelize-cli db:migrate

# Undo last migration
npx sequelize-cli db:migrate:undo

# Run all seeders
npx sequelize-cli db:seed:all

# Undo all seeders
npx sequelize-cli db:seed:undo:all

# Create new migration
npx sequelize-cli migration:generate --name migration-name

# Create new seeder
npx sequelize-cli seed:generate --name seeder-name
```

### TypeScript Commands
```bash
# Type checking
npx tsc --noEmit

# Build for production
npx tsc
```

## API Endpoints

### Health Check
- `GET /health` - API health status

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get post by ID

## Project Structure

```
src/
├── config/
│   ├── database.ts        # Sequelize configuration
│   └── config.js          # Environment-based DB config
├── models/
│   ├── User.ts            # User model
│   ├── Post.ts            # Post model
│   └── index.ts           # Model initialization
├── modules/
│   ├── users/             # User module
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   ├── user.route.ts
│   │   ├── user.interface.ts
│   │   └── user.data.ts
│   └── posts/             # Post module
│       ├── post.controller.ts
│       ├── post.service.ts
│       ├── post.routes.ts
│       ├── post.interface.ts
│       └── post.data.ts
├── migrations/            # Database migrations
├── seeders/              # Database seeders
└── index.ts              # Application entry point
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment | `development` |
| `DB_HOST` | Database host | `localhost` |
| `DB_PORT` | Database port | `3306` |
| `DB_NAME` | Database name | `simple_api` |
| `DB_USER` | Database username | `root` |
| `DB_PASSWORD` | Database password | `password` |
| `CORS_ORIGIN` | CORS origin | `http://localhost:3000` |

## Database Schema

### Users Table
- `id` (INT, Primary Key, Auto Increment)
- `name` (VARCHAR(100), Not Null)
- `email` (VARCHAR(255), Not Null, Unique)
- `createdAt` (DATETIME)
- `updatedAt` (DATETIME)

### Posts Table
- `id` (INT, Primary Key, Auto Increment)
- `content` (TEXT, Not Null)
- `userId` (INT, Foreign Key to users.id)
- `thumbnail` (VARCHAR(500), Not Null)
- `createdAt` (DATETIME)
- `updatedAt` (DATETIME)

## Troubleshooting

### Database Connection Issues
1. Ensure MySQL server is running
2. Verify database credentials in `.env`
3. Check if the database exists
4. Ensure user has proper permissions

### Migration Errors
1. Check database connection
2. Verify migration file syntax
3. Ensure previous migrations completed successfully

### Development Server Not Starting
1. Check if port 3000 is available
2. Verify all dependencies are installed
3. Check TypeScript compilation errors