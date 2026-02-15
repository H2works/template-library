import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { ShowcaseCard } from "@/components/showcase-card"
import {
  allCategories,
  categoryToSlug,
  slugToCategory,
  getItemsByCategory,
} from "@/lib/showcase-data"

export function generateStaticParams() {
  return allCategories.map((category) => ({
    slug: categoryToSlug(category),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = slugToCategory(slug)
  if (!category) return { title: "Not Found" }
  return {
    title: `${category} - Template Library`,
    description: `Browse ${category} templates. Find inspiration and source code for your next project.`,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = slugToCategory(slug)
  if (!category) notFound()

  const items = getItemsByCategory(category, 180)

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all templates</span>
        </Link>

        <div className="mb-10 flex items-center gap-3">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {category}
          </h1>
          <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            {items.length}
          </span>
        </div>

        {items.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ShowcaseCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <p className="text-lg font-medium text-foreground">
              No templates in this category yet
            </p>
            <Link
              href="/"
              className="mt-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
            >
              Browse all templates
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}
