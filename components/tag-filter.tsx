"use client"

import { cn } from "@/lib/utils"
import type { Tag } from "@/lib/showcase-data"

interface TagFilterProps {
  tags: Tag[]
  selectedTags: Set<string>
  onToggleTag: (tag: string) => void
  onClearAll: () => void
}

export function TagFilter({
  tags,
  selectedTags,
  onToggleTag,
  onClearAll,
}: TagFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={onClearAll}
        className={cn(
          "rounded-full border px-3 py-1.5 text-sm font-medium transition-all",
          selectedTags.size === 0
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-transparent text-muted-foreground hover:border-muted-foreground/50 hover:text-card-foreground"
        )}
      >
        All
      </button>
      {tags.map((tag) => {
        const isActive = selectedTags.has(tag)
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onToggleTag(tag)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-all",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-transparent text-muted-foreground hover:border-muted-foreground/50 hover:text-card-foreground"
            )}
          >
            {tag}
          </button>
        )
      })}
    </div>
  )
}
