import { CategorySection } from "@/components/category-section"
import {
  showcaseItems,
  allCategories,
  type ShowcaseItem,
  type Category,
} from "@/lib/showcase-data"

const API_URL =
  "https://haseyrsk.g.kuroco.app/rcms-api/2/topics/list/group-by-category?groupBy=category&topics_group_id=10&get_tag_flg=true&_output_format=json&type=array"
const API_TOKEN =
  "9fad544a668387bd9a3c9891ae50031a365d298d01d0d1410f5943042fc67e75"

function mapTopicToShowcaseItem(topic: any, categoryName: string): ShowcaseItem {
  const id = String(topic.topics_id)
  const title = topic.subject
  const thumbnail = topic.image
  const demoUrl = topic.demo_url
  const githubUrl = topic.github
  const tags = Array.isArray(topic.tags) ? topic.tags.map((t: any) => t.tag_nm) : []

  return {
    id,
    title,
    thumbnail,
    demoUrl,
    githubUrl,
    tags,
    category: categoryName as Category,
  }
}

export async function ShowcaseGrid() {
  const groupedByCategory = new Map<string, ShowcaseItem[]>()

  try {
    const res = await fetch(API_URL, {
      headers: { "X-RCMS-API-ACCESS-TOKEN": API_TOKEN },
      cache: "no-store",
    })

    if (res.ok) {
      const data = await res.json()

      // Try multiple possible shapes from the API
      const groups = data?.result ?? data?.data ?? data ?? null

      if (Array.isArray(groups)) {
        for (const g of groups) {
          const rawCat = g.category ?? g.category_nm ?? g.category_name ?? g.name ?? g
          const categoryName =
            typeof rawCat === "string"
              ? rawCat
              : rawCat?.category_nm ?? rawCat?.category_name ?? rawCat?.category ?? String(rawCat)
          const topics = g.list ?? g.topics ?? g.items ?? g.contents ?? []
          const mapped = (topics || []).map((t: any) => mapTopicToShowcaseItem(t, categoryName))
          if (mapped.length > 0) groupedByCategory.set(categoryName, mapped)
        }
      } else if (groups && typeof groups === "object") {
        // grouped object where keys are category names
        for (const [k, v] of Object.entries(groups)) {
          const rawCat = k
          const categoryName = typeof rawCat === "string" ? rawCat : String(rawCat)
          const topics = (v as any)?.list ?? (v as any)?.topics ?? v
          const mapped = Array.isArray(topics) ? topics.map((t: any) => mapTopicToShowcaseItem(t, categoryName)) : []
          if (mapped.length > 0) groupedByCategory.set(categoryName, mapped)
        }
      }
    }
  } catch (e) {
    // swallow and fallback to local data
  }

  // Fallback to local data if API returned nothing
  if (groupedByCategory.size === 0) {
    for (const category of allCategories) {
      const items = showcaseItems.filter((item) => item.category === category)
      if (items.length > 0) groupedByCategory.set(category, items)
    }
  }

  const entries = Array.from(groupedByCategory.entries()).sort((a, b) =>
    String(a[0]).localeCompare(String(b[0]))
  )

  return (
    <>
      {entries.map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
    </>
  )
}
