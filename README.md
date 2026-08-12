# Venra

Venra is an intelligent carrier readiness platform for trucking companies. Its goal is to help carriers understand their operational readiness, keep important records organized, and act before compliance or safety issues become costly problems.

The platform is planned to bring driver, equipment, document, expiration, inspection, ticket, claim, insurance recovery, IFTA, company compliance, and FMCSA information into one focused workspace. In later phases, an AI assistant will help users find information and understand what needs attention.

## Project goals

- Build a useful product for trucking companies through small, focused releases.
- Learn and apply sound software engineering practices.
- Keep the system understandable while leaving room for production growth.
- Create a premium, clean experience with a black and purple visual identity.

## Repository structure

```text
venra/
├── apps/
│   ├── web/        # Future Next.js frontend
│   └── api/        # Future Spring Boot backend
├── docs/           # Product and technical planning
├── infra/          # Future local and deployment infrastructure
├── .gitignore
└── README.md
```

The application folders are intentionally empty during this foundation phase. No frontend, backend, database, authentication, AI, OCR, or AWS services have been implemented yet.

## Planned technology stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, and the App Router
- **Backend:** Java, Spring Boot, Spring Web, Spring Data JPA, Flyway, and Bean Validation
- **Database:** PostgreSQL
- **Local infrastructure:** Docker Compose
- **Future capabilities:** Spring Security, OpenAPI, selected AWS services, OCR, and AI assistance

See the [`docs`](docs) directory for the current product and architecture notes.

## Current status

The repository currently contains the initial project structure and planning documentation only. The next implementation phase should scaffold the frontend as a small, standalone Next.js application.
