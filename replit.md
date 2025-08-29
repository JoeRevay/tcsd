# Joe Revay for School Board Campaign Website

## Overview

This is a React-based campaign website for Joe Revay, who is running for the Twinsburg City School District Board. The application is a single-page website featuring sections for candidate information, platform details, endorsements, volunteer opportunities, and contact forms. Built with modern web technologies, it provides a professional and engaging platform to showcase the candidate's qualifications and connect with voters.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Styling**: Tailwind CSS for utility-first styling with custom design system variables
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Server Structure**: Modular route registration system with middleware support
- **Development**: Hot module replacement and development server integration with Vite

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema**: Centralized schema definition in shared directory for consistency
- **Development Storage**: In-memory storage implementation for development and testing

### Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not yet implemented
- **Prepared Structure**: User model with username/password fields ready for authentication implementation
- **Session Management**: PostgreSQL session store configured for production use

### Design System
- **Theme**: Custom campaign-specific color palette with deep navy blue primary theme
- **Typography**: Helvetica Neue font family for professional appearance
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance
- **Component Variants**: Class-variance-authority for consistent component styling patterns

### Development Experience
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared code
- **Path Aliases**: Configured import aliases for clean, maintainable code structure
- **Development Tools**: Replit integration with runtime error overlay and cartographer for debugging
- **Code Organization**: Clear separation between client, server, and shared code directories

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for form management
- **Routing**: Wouter for lightweight client-side navigation
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with PostCSS for processing

### UI and Design Dependencies
- **Component Library**: Complete Radix UI component collection for accessible primitives
- **Styling Utilities**: clsx and tailwind-merge for conditional class composition
- **Icons**: Lucide React for consistent icon library
- **Animations**: Class-variance-authority for component variant management

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL dialect and Neon Database serverless connection
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution and esbuild for production builds

### Development and Build Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Development**: Replit-specific plugins for enhanced development experience
- **Type Checking**: TypeScript with strict configuration for code quality

### Form and Validation
- **Form Management**: React Hook Form with Hookform/resolvers for validation
- **Schema Validation**: Zod for runtime type checking and Drizzle-Zod for database schema validation
- **User Input**: Comprehensive form handling for contact and volunteer signup forms

### Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel**: Embla Carousel React for image and content carousels
- **Command Interface**: cmdk for command palette functionality
- **Cryptography**: Built-in Node.js crypto module for UUID generation