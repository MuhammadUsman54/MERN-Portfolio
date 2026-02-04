# MERN Portfolio

A professional portfolio and project management system built with Next.js, Node.js, and MongoDB.

## Features
- Clean, responsive marketing pages (Home, About, Projects, Contact)
- Projects gallery with filtering UI and detail pages
- Admin dashboard for managing projects
- Project CRUD API routes with MongoDB persistence
- Basic admin protection via HTTP Basic Auth

## Tech Stack
- Next.js (React)
- TypeScript
- Tailwind CSS
- Node.js + Express-style API routes (Next.js App Router)
- MongoDB + Mongoose

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file:
   ```
   MONGODB_URI=your-mongodb-uri
   ADMIN_PASSWORD=your-password
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```

## Troubleshooting
### `'next' is not recognized` on Windows
This typically means dependencies were not installed or the local `.bin` folder is not in your PATH. Run:
```bash
npm install
npx next dev
```
If that still fails, delete `node_modules` and `package-lock.json`, then reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Project Structure
See `src/app` for pages and API routes, `src/models` for Mongoose schemas, and `src/components` for reusable UI.
