"use client"

import { useState, useMemo, useCallback, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { TagFilter } from "@/components/tag-filter"
import { ShowcaseCard } from "@/components/showcase-card"
import { showcaseItems, allTags } from "@/lib/showcase-data"

export function SearchResults() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initialQuery = searchParams.get("q") ?? ""
  const initialTag = searchParams.get("tag") ?? ""

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedTags, setSelectedTags] = useState<Set<string>>(() => {
    return initialTag ? new Set([initialTag]) : new Set()
  })

  // Initialize from URL on mount with multiple tags
  useEffect(() => {
    const tags = searchParams.getAll("tag")
    if (tags.length > 0) {
      setSelectedTags(new Set(tags))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Sync URL when state changes
  useEffect(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set("q", searchQuery)
    const tagArray = Array.from(selectedTags)
    if (tagArray.length > 0) {
      tagArray.forEach((t) => params.append("tag", t))
    }
    const qs = params.toString()
    router.replace(`/search${qs ? `?${qs}` : ""}`, { scroll: false })
  }, [searchQuery, selectedTags, router])

  const handleToggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev)
      if (next.has(tag)) {
        next.delete(tag)
      } else {
        next.add(tag)
      }
      return next
    })
  }, [])

  const handleClearAll = useCallback(() => {
    setSelectedTags(new Set())
  }, [])

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value)
  }, [])

  const handleClearSearch = useCallback(() => {
    setSearchQuery("")
  }, [])

  const filteredItems = useMemo(() => {
    return showcaseItems.filter((item) => {
      const matchesTags =
        selectedTags.size === 0 ||
        item.tags.some((tag) => selectedTags.has(tag))

      const q = searchQuery.toLowerCase()
      const matchesSearch =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)

      return matchesTags && matchesSearch
    })
  }, [selectedTags, searchQuery])

  return (
    <div className="flex flex-col gap-8">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search templates..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="h-11 w-full rounded-lg border border-input bg-secondary pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
          autoFocus
        />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Tag Filter */}
      <TagFilter
        tags={allTags}
        selectedTags={selectedTags}
        onToggleTag={handleToggleTag}
        onClearAll={handleClearAll}
      />

      {/* Result Count */}
      <p className="text-sm text-muted-foreground">
        {filteredItems.length}{" "}
        {filteredItems.length === 1 ? "template" : "templates"} found
      </p>

      {/* Results Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <ShowcaseCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 py-20">
          <p className="text-lg font-medium text-foreground">
            No templates found
          </p>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
          <button
            type="button"
            onClick={() => {
              handleClearAll()
              handleClearSearch()
            }}
            className="mt-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
