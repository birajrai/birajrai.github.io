# AGENTS.md - Developer Guidelines for birajrai.github.io

## Project Overview

This is a personal portfolio website built with **Nuxt 4** (Vue 3), **TailwindCSS**, and **TypeScript**. The project uses the `app/` directory structure (Nuxt 4 feature).

## Build Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Generate static site (SSG)
npm run generate

# Preview production build locally
npm run preview

# Prepare Nuxt types (runs automatically post-install)
npm run postinstall
```

There are **no test scripts** configured in this project.

## Code Style Guidelines

### Vue Components

- Use **Composition API** with `<script setup>` syntax
- Place components in `app/components/` directory
- Pages go in `app/pages/` directory
- Use single-file component (SFC) format with `.vue` extension

```vue
<template>
  <!-- template content -->
</template>

<script setup lang="ts">
// component logic
</script>
```

### TypeScript

- Enable strict type checking where possible
- Use TypeScript in all Vue components via `lang="ts"`
- Rely on Nuxt's auto-imported types from `.nuxt/tsconfig.app.json`

### Imports

- Nuxt auto-imports components from `app/components/` and `app/pages/`
- Use `NuxtLink` for internal navigation
- Import Vue composition APIs directly (ref, computed, etc.)

```vue
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Nav.vue`, `Footer.vue`)
- **Pages**: kebab-case (e.g., `about.vue`, `my-project.vue`)
- **Props/Variables**: camelCase
- **CSS Classes**: Tailwind utility classes (kebab-case)

### TailwindCSS

- Use Tailwind utility classes for all styling
- Use `@nuxtjs/tailwindcss` module
- Common patterns:
  - Flexbox: `flex`, `flex-col`, `justify-between`, `items-center`
  - Spacing: `p-6`, `m-4`, `gap-6`
  - Typography: `text-xl`, `font-bold`, `hover:text-blue-500`
  - Responsive: `md:flex`, `lg:text-2xl`

### File Structure

```
app/
├── app.vue           # Root layout component
├── components/       # Reusable Vue components
│   ├── Nav.vue
│   └── Footer.vue
└── pages/            # Route pages (auto-routing)
    ├── index.vue     # Home page (/)
    ├── about.vue     # /about
    ├── works.vue     # /works
    ├── gallery.vue   # /gallery
    ├── contact.vue   # /contact
    └── project.vue   # /project
```

### Nuxt Configuration

- Edit `nuxt.config.ts` for module configuration
- Current modules: `@nuxtjs/tailwindcss`, `@nuxtjs/seo`, `@nuxtjs/google-fonts`
- Use `compatibilityDate` for Nuxt version pinning

### Error Handling

- No custom error boundaries configured
- Rely on Vue/Nuxt default error handling
- For API errors, use try/catch with appropriate user feedback

### Scripts & Package Management

- Package manager: npm (with node_modules)
- Lock file: `bun.lock` (suggests Bun was used at some point)
- Always run `npm install` after modifying package.json

## Development Workflow

1. Create feature branch from main
2. Make changes in `app/` directory
3. Test with `npm run dev`
4. Build with `npm run generate` for static output
5. Commit changes (no pre-commit hooks configured)

## Notes for AI Agents

- This is a static site (SSG) - no server-side API routes
- No tests exist - verify changes manually via browser
- SEO module is configured for meta tags and OpenGraph
- Google Fonts module handles font loading
- No ESLint or Prettier configured - use editor defaults

## Common Tasks

### Adding a New Page

1. Create a new `.vue` file in `app/pages/`
2. Use kebab-case naming (e.g., `my-new-page.vue`)
3. The page will be automatically routed at `/my-new-page`

### Adding a New Component

1. Create a new `.vue` file in `app/components/`
2. Use PascalCase naming (e.g., `MyComponent.vue`)
3. The component is auto-imported and available globally

### Styling with Tailwind

- All styling uses Tailwind utility classes
- No custom CSS files - use Tailwind exclusively

### Modifying Nuxt Configuration

```typescript
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo', '@nuxtjs/google-fonts']
})
```

## Deployment

This site is deployed as a static site (SSG). Run `npm run generate` - output is in `.output/public/`.

## Dependencies

- **nuxt**: ^4.3.1, **vue**: ^3.5.29, **@nuxtjs/tailwindcss**: 6.14.0
- **@nuxtjs/seo**: 3.4.0, **@nuxtjs/google-fonts**: 3.2.0, **vue-router**: ^4.6.4
