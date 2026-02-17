"use client"

import { cn } from "@/lib/utils"

export type Tag = {
  tag_id: number
  tag_nm: string
}

interface TagFilterProps {
  tags: Tag[]
  selectedTags: Set<string> // tag_idをstringで管理
  onToggleTag: (tagId: string) => void
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
      {/* Allボタン */}
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
        const idStr = String(tag.tag_id)
        const isActive = selectedTags.has(idStr)

        return (
          <button
            key={tag.tag_id}
            type="button"
            onClick={() => onToggleTag(idStr)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-all",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-transparent text-muted-foreground hover:border-muted-foreground/50 hover:text-card-foreground"
            )}
          >
            {tag.tag_nm}
          </button>
        )
      })}
    </div>
  )
}
