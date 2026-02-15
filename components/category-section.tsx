import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ShowcaseCard } from "@/components/showcase-card"
import { categoryToSlug, slugToCategory } from "@/lib/showcase-data"

interface CategorySectionProps {
  category: string
  items: any[]
}

export function CategorySection({ category, items }: CategorySectionProps) {
  if (items.length === 0) return null

  const slug = slugToCategory(category)
    ? categoryToSlug(slugToCategory(category)!)
    : category.toLowerCase().replace(/[^a-z0-9]+/gi, "-").replace(/(^-|-$)/g, "")

  return (
    <section>
      <div className="mb-6 flex items-center gap-3">
        <Link
          href={`/category/${slug}`}
          className="group/heading flex items-center gap-2 transition-colors hover:text-muted-foreground"
        >
          <h2 className="text-xl font-bold text-foreground group-hover/heading:text-muted-foreground">
            {category}
          </h2>
          <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover/heading:translate-x-0.5 group-hover/heading:opacity-100" />
        </Link>
        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
          {items.length}
        </span>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ShowcaseCard key={item.topics_id} item={item} />
        ))}
      </div>
    </section>
  )
}
