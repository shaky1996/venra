# Venra Web

The Venra frontend is a Next.js application using React, TypeScript, Tailwind CSS, and the App Router.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm run dev` starts the development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` checks the code with ESLint.
- `npm run lint:fix` fixes safe ESLint issues where possible.
- `npm run typecheck` checks TypeScript without emitting files.

The Venra color tokens are defined in `src/app/globals.css` and exposed as Tailwind utilities such as `bg-background`, `bg-surface`, `text-primary`, and `border-border`.
