"use client"

import { useState, useCallback, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { TagFilter } from "@/components/tag-filter"
import { ShowcaseCard } from "@/components/showcase-card"
import getContentList from "@/fetch/getContentList"

type Tag = {
  tag_id: number
  tag_nm: string
}

interface SearchResultsProps {
  initialTags: Tag[]
}

export function SearchResults({ initialTags }: SearchResultsProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initialQuery = searchParams.get("q") ?? ""
  const initialTagParams = searchParams.getAll("tag")

  const [inputValue, setInputValue] = useState(initialQuery)
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  const [selectedTags, setSelectedTags] = useState<Set<string>>(
    new Set(initialTagParams)
  )

  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  // 🔹 URL同期（検索実行時のみ）
  useEffect(() => {
    const params = new URLSearchParams()

    if (searchQuery) params.set("q", searchQuery)

    Array.from(selectedTags).forEach((t) => {
      params.append("tag", t)
    })

    const qs = params.toString()
    router.replace(`/search${qs ? `?${qs}` : ""}`, { scroll: false })
  }, [searchQuery, selectedTags, router])

  // 🔥 API検索
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const data = await getContentList({
          keyword: searchQuery,
          tagIds: Array.from(selectedTags).map(Number),
        })

        setItems(data?.list || [])
      } catch (err) {
        console.error(err)
        setItems([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [searchQuery, selectedTags])

  const executeSearch = useCallback(() => {
    setSearchQuery(inputValue)
  }, [inputValue])

  const handleToggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev)
      if (next.has(tag)) next.delete(tag)
      else next.add(tag)
      return next
    })
  }, [])

  const handleClearAll = useCallback(() => {
    setSelectedTags(new Set())
  }, [])

  const handleClearSearch = useCallback(() => {
    setInputValue("")
    setSearchQuery("")
  }, [])

  return (
    <div className="flex flex-col gap-8">
      {/* Search */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          executeSearch()
        }}
        className="relative"
      >
        {/* 🔥 虫眼鏡クリックで検索実行 */}
        <button
          type="submit"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <Search className="h-4 w-4" />
        </button>

        <input
          type="text"
          placeholder="Search templates..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="h-11 w-full rounded-lg border bg-secondary pl-10 pr-10 text-sm"
        />

        {inputValue && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {/* 🔥 ビルド時取得タグを使用 */}
      <TagFilter
        tags={initialTags}
        selectedTags={selectedTags}
        onToggleTag={handleToggleTag}
        onClearAll={handleClearAll}
      />

      {/* Result count */}
      {!loading && (
        <p className="text-sm text-muted-foreground">
          {items.length} {items.length === 1 ? "template" : "templates"} found
        </p>
      )}

      {/* Loading */}
      {loading && (
        <div className="py-20 text-center text-muted-foreground">
          Loading...
        </div>
      )}

      {/* Results */}
      {!loading && items.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ShowcaseCard key={item.topics_id} item={item} />
          ))}
        </div>
      )}

      {/* Empty */}
      {!loading && items.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-3 py-20">
          <p className="text-lg font-medium">No templates found</p>
          <button
            type="button"
            onClick={() => {
              handleClearAll()
              handleClearSearch()
            }}
            className="mt-2 rounded-lg bg-secondary px-4 py-2 text-sm"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
