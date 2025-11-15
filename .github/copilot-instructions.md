# AmbiSmart - AI Coding Guidelines

## Project Overview
AmbiSmart is an educational platform landing page built with React + TypeScript + Vite, using React Router for navigation and Tailwind CSS v4 for styling. The site promotes academic tutoring services for Indonesian students.

## Architecture & Structure

### Page Architecture
- **Component-based routing**: Main routes defined in `src/App.tsx`
- **Dashboard pattern**: `/` route renders `Dashboard` page which composes 5 sequential sections (Hero, About, Services, Testimonials, CTA)
- **Special pages**: `/2ndambismart` (anniversary event), `*` (404)
- **Footer**: Global `<Footer />` rendered outside `<Routes>` in `App.tsx` (appears on all pages)

### Component Organization
- `src/components/`: Reusable UI sections (hero, about, services, testimonials, cta, footer)
- `src/pages/`: Full page components that compose sections
- `src/hooks/`: Custom React hooks (currently only `useDocumentTitle`)
- No separate `lib/` or `utils/` directory

## Critical Conventions

### Styling - Tailwind CSS v4 with Custom Theme
**Custom color system** (defined in `src/App.css` `@theme inline` block):
```css
--color-primary: #001f4d       /* Navy blue - main brand */
--color-primary-dark: #001135  /* Darker navy */
--color-accent: #ff9500        /* Orange - CTAs & highlights */
--color-accent-dark: #e67e00
--color-accent-light: #ffb84d
--color-accent-red: #e63946    /* Red accent for emphasis */
```

**Usage pattern**: Use utility classes from `@layer base`:
```tsx
className="bg-primary text-accent border-accent"
// NOT: className="bg-[#001f4d]" (avoid direct hex values in components)
```

**Responsive design**: Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints heavily used
- Example: `text-3xl sm:text-4xl md:text-5xl` for fluid typography

### Component Patterns

**Page title management**: Always use `useDocumentTitle` hook in page components:
```tsx
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function MyPage() {
  useDocumentTitle("Page Title — AmbiSmart");
  return <div>...</div>;
}
```

**Component imports**: Use individual default exports, not barrel exports:
```tsx
// ✅ Correct (actual pattern in codebase)
import About from "../components/about";
import CTA from "../components/cta";

// ❌ Avoid (commented out in dashboard.tsx)
// import { About, CTA, Footer } from "../components/";
```

**Client components**: Use `"use client"` directive when needed (see `hero.tsx`)

### Navigation & Routing
- **Internal navigation**: Use `window.location.href = "#section"` for hash navigation or `/route` for page changes
- **External links**: `window.location.href = "https://wa.me/..."` for WhatsApp integration
- **Route naming**: Use descriptive paths (`/2ndambismart` not `/anniversary`)

## Development Workflow

### Build Commands (package.json)
```bash
npm run dev       # Vite dev server with HMR (SWC Fast Refresh)
npm run build     # TypeScript check + Vite production build
npm run lint      # ESLint (flat config format)
npm run preview   # Preview production build
```

### TypeScript Configuration
- **Strict mode enabled**: All strict checks active (`noUnusedLocals`, `noUnusedParameters`)
- **Module resolution**: `bundler` mode (Vite-specific)
- **No emitted files**: TypeScript for type-checking only; Vite handles bundling

### Linting
- **ESLint 9 flat config** (`eslint.config.js`)
- **Key plugins**: `react-hooks`, `react-refresh`, `typescript-eslint`
- Ignore `dist/` folder

## Technical Stack Notes

### Dependencies
- **UI Components**: Heavy Radix UI usage (accordion, dialog, dropdown, etc.) - installed but not yet implemented in visible components
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` plugin + `tw-animate-css` for animations
- **Form handling**: `react-hook-form` + `@hookform/resolvers` + `zod` (not yet used)
- **Icons**: `lucide-react` (not yet used in current pages)
- **Next.js**: Listed as dependency but this is a Vite project (likely unused - may need cleanup)

### Vite Configuration
- **React plugin**: `@vitejs/plugin-react-swc` (SWC for Fast Refresh)
- **Tailwind**: `@tailwindcss/vite` plugin (v4 approach, no `tailwind.config.js`)

## Common Patterns

### Button Styling
Primary CTA buttons follow this pattern:
```tsx
<button className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all shadow-lg">
```

Secondary outline buttons:
```tsx
<button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all">
```

### Section Layout
Standard section wrapper:
```tsx
<section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-dark">
  <div className="max-w-6xl mx-auto">
    {/* content */}
  </div>
</section>
```

### Gradient Backgrounds
Decorative blur elements for visual depth (see `hero.tsx`, `404.tsx`, `2ndyear.tsx`):
```tsx
<div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
```

## Code Quality Guidelines

1. **Export pattern**: All components use `export default function ComponentName()`
2. **Props typing**: Define inline when needed (no separate prop interfaces yet in current code)
3. **File naming**: Lowercase with extension `.tsx` for components, `.ts` for utilities
4. **CSS organization**: Global styles in `src/index.css`, theme in `src/App.css`, component styles inline with Tailwind

## What to Avoid

- Don't create `lib/utils.ts` or similar - no utility structure exists yet
- Don't use Next.js-specific features (despite it being in package.json)
- Don't use shadcn/ui component patterns - components are custom-built with Tailwind
- Don't create barrel exports (`index.ts` files) - use direct imports
