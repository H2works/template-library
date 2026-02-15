import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SearchResults } from "@/components/search-results"

export const metadata = {
  title: "Search - Template Library",
  description: "Search and filter templates by keyword and tags.",
}

export default function SearchPage() {
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
          <SearchResults />
        </Suspense>
      </div>
    </main>
  )
}
