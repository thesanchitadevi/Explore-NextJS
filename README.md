## NextJS-15

# Project Structure

- `app/`
  - `layout.js` → Defines the layout for the pages.
  - `page.js` → Main component for the route.

## Client vs Server Components

- `"use client"` for Client-Side Rendering
  If a component uses hooks like `useState` or `useEffect`, add `"use client"` at the top of the file.

- By default, Next.js components are **server-side rendered**.

## Metadata

- Metadata can **only** be used in server components for SEO.

```js
export const metadata = {
  title: "About Page",
  description: "This is the about page.",
};
```

# Next.js - Relative Path vs Absolute Path

## 1. Relative Path

- Uses `../` or `./` to import files.
- Example:
  ```js
  import Button from "../../components/Button";
  ```

## 2. Absolute Path

- Uses `@/` to import files
- Example:
  ```js
  import Button from "@/components/Button";
  ```

# Concept of pre-rendering (SSG + SSR)
