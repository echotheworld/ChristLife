## Build Error Fixing Instructions

### 1. Replace HTML Anchor Tags with Next.js Link Components
- Search for all `<a>` tags that link to internal pages (/, /about, /leadership, /resources)
- Replace them with Next.js `<Link>` components
- Keep external links (like social media) as `<a>` tags

### 2. Fix Unescaped Entities
- Search for all instances of single quotes (') in text content
- Replace with `&apos;` or `&#39;`
- Search for all instances of double quotes (") in text content
- Replace with `&quot;` or `&#34;`

### 3. Fix Image Components
- Replace all `<img>` tags with Next.js `<Image>` components from 'next/image'
- Add required props: width, height, and priority (for above-the-fold images)
- Consider using blur placeholder for better loading experience

### 4. Fix TypeScript and ESLint Issues
- Remove unused imports (like 'Link' in app/page.tsx)
- Fix any type declarations in globe.tsx and neon-gradient-card.tsx
- Fix React Hook dependencies in globe.tsx
- Fix unused variables (like 'children' in typing-animation.tsx)

### 5. Systematic Approach
1. Start with one file at a time
2. Use search functionality to find specific issues
3. Test each change individually
4. Run `npm run build` after fixing each category of issues
5. Keep track of fixed issues to avoid missing any

### 6. Order of Operations
1. Fix TypeScript/ESLint errors first (unused imports, variables)
2. Replace HTML anchors with Next.js Links
3. Fix unescaped entities
4. Optimize images with Next.js Image component
5. Fix React Hook dependencies

### Note
- Make incremental changes
- Commit after each major fix
- Test the site functionality after each change
- Keep the original code structure intact
- Don't change any business logic or styling 