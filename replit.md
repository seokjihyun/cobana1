# Cobana - 암호화폐 거래소 수수료 할인 허브

## Overview

Cobana는 다양한 암호화폐 거래소들의 수수료 할인 혜택을 한곳에서 비교하고 선택할 수 있는 플랫폼입니다. 바이비트, 바이낸스, OKX, 비트겟, 게이트아이오, 빙엑스 등 주요 거래소들의 최고 할인 혜택을 제공합니다. "Coin BaNana"를 줄인 브랜드명으로, 바나나 아이콘과 노랑-오렌지 그라데이션을 활용한 현대적인 디자인을 특징으로 합니다.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth animations

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API endpoints
- **Build System**: ESBuild for production builds

### Development Environment
- **Runtime**: Node.js 20
- **Package Manager**: npm
- **Development Server**: Vite for frontend development
- **TypeScript**: Full TypeScript support across the stack

## Key Components

### Database Schema
The application uses two main tables:
- **Users**: Stores user authentication data with username/password
- **Leads**: Stores potential customers with email, password, and referral tracking

### Frontend Components
- **Landing Page**: Complete marketing site with hero, benefits, testimonials, and FAQ sections
- **Form Components**: Lead registration forms with validation
- **UI Components**: Comprehensive component library including buttons, inputs, cards, dialogs, and more
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Backend Services
- **Storage Layer**: Abstracted storage interface with memory storage implementation (ready for PostgreSQL)
- **API Routes**: Lead creation and retrieval endpoints
- **Validation**: Zod schema validation for data integrity
- **Error Handling**: Centralized error handling middleware

## Data Flow

1. **User Registration**: Users fill out the registration form on the frontend
2. **Data Validation**: Form data is validated using Zod schemas on both client and server
3. **API Request**: Frontend sends POST request to `/api/leads` endpoint
4. **Database Storage**: Backend validates and stores lead data in PostgreSQL
5. **Response Handling**: Success/error responses are displayed to the user via toast notifications

## External Dependencies

### Core Dependencies
- **Database**: Neon Database for serverless PostgreSQL
- **UI Library**: Radix UI primitives for accessible components
- **Validation**: Zod for schema validation
- **Query Management**: TanStack Query for server state
- **Styling**: Tailwind CSS for utility-first styling

### Development Dependencies
- **Build Tools**: Vite for development, ESBuild for production
- **TypeScript**: Full type safety across the stack
- **Linting**: ESLint configuration for code quality

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Port**: 5000 (proxied to port 80 externally)
- **Features**: Hot module replacement, runtime error overlay

### Production
- **Build**: `npm run build` - Creates optimized frontend and backend bundles
- **Start**: `npm run start` - Runs production server
- **Deployment**: Configured for Replit autoscale deployment

### Database Management
- **Migration**: `npm run db:push` - Pushes schema changes to database
- **Configuration**: Environment variable `DATABASE_URL` required

## Changelog

```
Changelog:
- June 29, 2025. Applied comprehensive SEO optimization: Added ChatGPT-generated SEO meta tags, keywords, Open Graph, Twitter Cards, Google/Naver verification, structured data (JSON-LD), and canonical URLs to both React and static HTML versions
- June 29, 2025. Fixed layout consistency: Updated exchange banners to match Netlify version with "운영중/준비중" status badges and simplified card design
- June 29, 2025. Removed language selection feature: Eliminated all multilingual support code, keeping Korean-only content for simplified UX
- June 29, 2025. Complete content transformation to multi-exchange platform: Updated all sections (testimonials, FAQ, CTA, how-it-works) to reflect Cobana's 6-exchange comparison approach with variable discount rates (20-50%)
- June 29, 2025. Major rebrand to "Cobana" (Coin BaNana) with banana icon and yellow-orange gradient branding
- June 28, 2025. Updated exchange logos based on actual brand icons; Added multi-exchange referral banners
- June 26, 2025. Initial setup with Bybit 20% discount landing page
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```