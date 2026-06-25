---
name: crud-generator
description: Generate CRUD functionality for this portfolio website. Use when adding or modifying admin content management for Profile, Project, Note, article publishing, project management, or any Prisma-backed create/read/update/delete workflow in the Next.js App Router project.
---

# Portfolio CRUD Generator

Use this skill for this project's full-stack content management work.

## Project Fit

This repository is a `Next.js App Router + TypeScript + Prisma + Supabase PostgreSQL` personal website.

Do not assume:
- shadcn/ui
- Tailwind CSS
- React Hook Form
- Zod
- toast libraries
- React Router
- Vite

Prefer:
- Server Components for read pages
- Server Actions for mutations
- Prisma through `src/lib/prisma.ts`
- data access helpers in `src/services`
- existing Neo-brutalism CSS in `src/styles.css`
- native form controls with accessible labels and visible focus states

## CRUD Targets

The primary managed content models are:
- `Profile`: personal information
- `Project`: portfolio projects
- `Note`: notes/articles, including publishing state

Default admin routes:
- `/admin`
- `/admin/profile`
- `/admin/projects`
- `/admin/projects/new`
- `/admin/projects/[id]/edit`
- `/admin/notes`
- `/admin/notes/new`
- `/admin/notes/[id]/edit`

## Workflow

1. Confirm the content model and operation.
2. Check `prisma/schema.prisma` before changing data shape.
3. If schema changes are needed, update Prisma schema and plan a migration.
4. Add data access functions under `src/services`.
5. Add mutation Server Actions close to the admin route or in `src/services/admin-*`.
6. Build admin pages under `src/app/admin`.
7. Reuse shared UI components where practical; otherwise use semantic HTML and existing CSS classes.
8. Add authentication/authorization before exposing destructive or write operations.
9. Run `pnpm build`; for schema changes also run Prisma generate/migrate.

## Implementation Rules

- Never put Prisma queries inside Client Components.
- Do not expose unrestricted CRUD API routes unless the user explicitly asks for API access.
- Prefer Server Actions over `/api` routes for admin forms.
- Validate user input on the server with small local validation helpers. Add a validation library only after asking or when complexity justifies it.
- Use soft confirmation for delete operations in the UI. For irreversible deletes, require an explicit user action.
- Keep admin UI consistent with Neo-brutalism: thick borders, hard shadows, high contrast, no glassmorphism.
- Keep form fields readable on mobile. Labels must be visible, not placeholder-only.
- Protect admin routes before real use. Until auth exists, mark admin pages as development-only or block write operations.

## Suggested File Patterns

Profile:
- `src/app/admin/profile/page.tsx`
- `src/app/admin/profile/actions.ts`
- service helpers in `src/services/content.ts` or `src/services/admin-profile.ts`

Projects:
- `src/app/admin/projects/page.tsx`
- `src/app/admin/projects/new/page.tsx`
- `src/app/admin/projects/[id]/edit/page.tsx`
- `src/app/admin/projects/actions.ts`

Notes:
- `src/app/admin/notes/page.tsx`
- `src/app/admin/notes/new/page.tsx`
- `src/app/admin/notes/[id]/edit/page.tsx`
- `src/app/admin/notes/actions.ts`

Shared admin UI:
- `src/components/AdminFormField.tsx`
- `src/components/AdminToolbar.tsx`
- `src/components/AdminTable.tsx`

Only add shared components after at least two admin pages need the same pattern.

## Data Rules

Project:
- `tags` is stored as `String[]`; accept comma-separated input in forms and normalize on submit.
- `sortOrder` controls display order.
- `featured` controls homepage inclusion.

Note:
- `slug` must be unique and URL-safe.
- `published` controls public visibility.
- `date` is the publication date.
- `content` stores full article body until a richer Markdown/MDX pipeline is added.

Profile:
- Treat as singleton content. Prefer updating the newest/default profile instead of creating multiple profiles.

## Verification

After implementation:
- Run `pnpm build`.
- For schema changes, run `pnpm prisma:migrate --name <name>` and `pnpm prisma:generate`.
- Manually check `/admin` pages and public pages that consume changed data.
- Confirm write operations do not expose secrets or run from client-side Prisma.
