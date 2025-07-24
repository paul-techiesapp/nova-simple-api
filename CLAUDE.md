# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Application
- `pnpm dev` - Start development server with auto-reload on file changes
- The server runs on port 3000 by default

### Package Management
- This project uses `pnpm` as the package manager (specified in packageManager field)
- Use `pnpm install` to install dependencies
- Use `pnpm add <package>` to add new dependencies

### TypeScript Compilation
- TypeScript is configured with strict mode enabled
- Source files are in `src/`, compiled output goes to `dist/`
- Use `tsc` to type-check without running

## Architecture Overview

This is a REST API built with Express.js and TypeScript following a modular, layered architecture:

### Module Structure
Each feature module (users, posts) follows a consistent 5-layer pattern:
- **Routes** (`*.routes.ts`) - Express route definitions and HTTP method mapping
- **Controllers** (`*.controller.ts`) - Request/response handling and HTTP logic
- **Services** (`*.service.ts`) - Business logic and data orchestration
- **Data** (`*.data.ts`) - In-memory data storage with getter/setter functions
- **Interfaces** (`*.interface.ts`) - TypeScript type definitions

### Request Flow
1. Express routes (`/api/users`, `/api/posts`) → Route handlers
2. Route handlers → Controller functions
3. Controllers → Service classes for business logic
4. Services → Data layer for persistence operations

### Key Architectural Patterns
- **Dependency Injection**: Controllers instantiate services, services use data functions
- **Separation of Concerns**: Clear boundaries between HTTP, business logic, and data layers
- **Type Safety**: Comprehensive TypeScript interfaces for all data models
- **Consistent Error Handling**: 404 responses for not found resources

### Data Storage
- Currently using in-memory arrays with mock data
- Data can be modified via `setUsers()` and `setPosts()` functions
- No persistence between server restarts

### API Endpoints
- `GET /health` - Health check endpoint
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `GET /api/posts` - Get all posts  
- `GET /api/posts/:id` - Get post by ID

### Database Integration
- **ORM**: Sequelize with MySQL
- **Models**: Located in `src/models/` with TypeScript interfaces and associations
- **Migrations**: Database schema changes in `src/migrations/`
- **Seeders**: Sample data in `src/seeders/`
- **Configuration**: Environment-based config in `src/config/`

### Database Commands
- `npx sequelize-cli db:migrate` - Run pending migrations
- `npx sequelize-cli db:seed:all` - Run all seeders
- `npx sequelize-cli migration:generate --name <name>` - Create new migration
- `npx sequelize-cli seed:generate --name <name>` - Create new seeder

### Adding New Modules
When creating new feature modules, follow the established pattern:
1. Create new directory under `src/modules/`
2. Implement the 5-layer structure (routes, controller, service, data, interface)
3. Create Sequelize model in `src/models/` if needed
4. Update services to use Sequelize models instead of in-memory data
5. Register routes in `src/index.ts`
6. Maintain consistent naming conventions (singular module names)