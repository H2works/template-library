export type Tag =
  | "React"
  | "Next.js"
  | "TypeScript"
  | "Tailwind CSS"
  | "Open Source"
  | "Vue"
  | "Node.js"
  | "Full Stack"
  | "UI Library"
  | "Real-time"

export type Category =
  | "Dashboard"
  | "E-Commerce"
  | "Landing Page"
  | "Blog"
  | "Portfolio"
  | "Documentation"
  | "Application"

export interface ShowcaseItem {
  id: string
  title: string
  thumbnail: string
  demoUrl: string
  githubUrl: string
  tags: Tag[]
  category: Category
}

export const allTags: Tag[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Open Source",
  "Vue",
  "Node.js",
  "Full Stack",
  "UI Library",
  "Real-time",
]

export const allCategories: Category[] = [
  "Dashboard",
  "E-Commerce",
  "Landing Page",
  "Blog",
  "Portfolio",
  "Documentation",
  "Application",
]

export function categoryToSlug(category: Category): string {
  return category.toLowerCase().replace(/[\s&]+/g, "-")
}

export function slugToCategory(slug: string): Category | undefined {
  return allCategories.find((c) => categoryToSlug(c) === slug)
}

export function getItemsByCategory(
  category: Category,
  limit = 180
): ShowcaseItem[] {
  return showcaseItems
    .filter((item) => item.category === category)
    .slice(0, limit)
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "nextjs-dashboard",
    title: "Next.js Admin Dashboard",
    thumbnail: "/thumbnails/nextjs-dashboard.jpg",
    demoUrl: "https://example.com/demo/nextjs-dashboard",
    githubUrl: "https://github.com/example/nextjs-dashboard",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Full Stack"],
    category: "Dashboard",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard Pro",
    thumbnail: "/thumbnails/analytics-dashboard.jpg",
    demoUrl: "https://example.com/demo/analytics-dashboard",
    githubUrl: "https://github.com/example/analytics-dashboard",
    tags: ["React", "TypeScript", "Node.js", "Full Stack"],
    category: "Dashboard",
  },
  {
    id: "react-ecommerce",
    title: "React E-Commerce Store",
    thumbnail: "/thumbnails/react-ecommerce.jpg",
    demoUrl: "https://example.com/demo/react-ecommerce",
    githubUrl: "https://github.com/example/react-ecommerce",
    tags: ["React", "TypeScript", "Tailwind CSS", "Open Source"],
    category: "E-Commerce",
  },
  {
    id: "tailwind-landing",
    title: "SaaS Landing Page",
    thumbnail: "/thumbnails/tailwind-landing.jpg",
    demoUrl: "https://example.com/demo/tailwind-landing",
    githubUrl: "https://github.com/example/tailwind-landing",
    tags: ["Next.js", "Tailwind CSS", "Open Source"],
    category: "Landing Page",
  },
  {
    id: "vue-blog",
    title: "Vue.js Blog Platform",
    thumbnail: "/thumbnails/vue-blog.jpg",
    demoUrl: "https://example.com/demo/vue-blog",
    githubUrl: "https://github.com/example/vue-blog",
    tags: ["Vue", "TypeScript", "Open Source"],
    category: "Blog",
  },
  {
    id: "portfolio-site",
    title: "Developer Portfolio",
    thumbnail: "/thumbnails/portfolio-site.jpg",
    demoUrl: "https://example.com/demo/portfolio-site",
    githubUrl: "https://github.com/example/portfolio-site",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "Portfolio",
  },
  {
    id: "api-docs",
    title: "API Documentation Site",
    thumbnail: "/thumbnails/api-docs.jpg",
    demoUrl: "https://example.com/demo/api-docs",
    githubUrl: "https://github.com/example/api-docs",
    tags: ["React", "TypeScript", "Open Source", "UI Library"],
    category: "Documentation",
  },
  {
    id: "design-system",
    title: "Component Library Docs",
    thumbnail: "/thumbnails/design-system.jpg",
    demoUrl: "https://example.com/demo/design-system",
    githubUrl: "https://github.com/example/design-system",
    tags: ["React", "TypeScript", "UI Library", "Open Source"],
    category: "Documentation",
  },
  {
    id: "chat-app",
    title: "Real-time Chat App",
    thumbnail: "/thumbnails/chat-app.jpg",
    demoUrl: "https://example.com/demo/chat-app",
    githubUrl: "https://github.com/example/chat-app",
    tags: ["React", "Node.js", "TypeScript", "Real-time", "Full Stack"],
    category: "Application",
  },
]
