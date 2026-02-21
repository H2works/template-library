import { Suspense } from "react"
import type { Metadata } from 'next'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SearchResults } from "@/components/search-results"
import getTagList from "@/fetch/getTagList"
import { siteConfig } from "@/lib/metadata"

export const metadata: Metadata = {
  title: `Search - Template Library`,
  description: "テンプレートをキーワード・タグで検索できます。",
  openGraph: {
    title: `Search - Template Library`,
    description: "テンプレートをキーワード・タグで検索できます。",
    url: `${siteConfig.url}/search`,
    type: 'website',
  },
}

export default async function SearchPage() {
  const tagData = await getTagList()

  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
          Search Templates
        </h1>

        <Suspense
          fallback={
            <div className="py-20 text-center text-muted-foreground">
              Loading...
            </div>
          }
        >
          <SearchResults initialTags={tagData?.list || []} />
        </Suspense>
      </div>
    </main>
  )
}
