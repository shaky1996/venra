# Architecture

## Approach

Venra will begin as a straightforward web application with a separate frontend and backend in one repository. The architecture should remain easy to run locally, test, and understand. New infrastructure will be introduced only when a product requirement justifies it.

## Planned technology stack

### Frontend

- Next.js with the App Router
- React
- TypeScript
- Tailwind CSS
- Reusable components and theme tokens

The frontend will live in `apps/web` and communicate with the backend through HTTP APIs.

### Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Bean Validation
- Flyway database migrations
- Spring Security in a later phase
- OpenAPI/Swagger documentation in a later phase

The backend will live in `apps/api` and own business rules, validation, persistence, and API behavior.

### Data and local infrastructure

- PostgreSQL as the primary relational database
- Docker Compose for the future local PostgreSQL environment

### Future infrastructure

AWS services may eventually support hosting, identity, file storage, document processing, messaging, email, monitoring, and secrets. Authentication, AWS integration, OCR, and AI are explicitly deferred until the core application needs them.

## Phased architecture

1. **Foundation:** Repository structure and planning documentation.
2. **Frontend foundation:** Next.js application, theme tokens, and a small initial interface.
3. **Backend foundation:** Spring Boot application with health checks, validation, and clear package boundaries.
4. **Persistence foundation:** PostgreSQL through Docker Compose, Flyway, and the first narrowly scoped data model.
5. **First vertical feature:** One workflow implemented across UI, API, and database.
6. **Platform growth:** Security, file handling, external data, and operational infrastructure added as required.

Architecture decisions should be documented when they are made, rather than designing every future subsystem in advance.
