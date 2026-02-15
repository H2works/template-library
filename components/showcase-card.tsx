import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ShowcaseCard({ item }: any) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-muted-foreground/30 hover:shadow-lg hover:shadow-black/20">
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <Image
          src={item.image}
          alt={`${item.title} screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
        <div className="absolute right-3 top-3 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={item.demo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
            aria-label={`View demo of ${item.subject}`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
            aria-label={`View source code of ${item.subject} on GitHub`}
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-base font-semibold leading-tight text-card-foreground">
          {item.title}
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag: any) => (
            <Link key={tag.tag_id} href={`/search?tag=${encodeURIComponent(tag.tag_nm)}`}>
              <Badge
                variant="secondary"
                className="text-[11px] font-medium text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {tag.tag_nm}
              </Badge>
            </Link>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 border-t border-border pt-3">
          <a
            href={item.demo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-card-foreground"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Demo</span>
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-card-foreground"
          >
            <Github className="h-3.5 w-3.5" />
            <span>Source</span>
          </a>
        </div>
      </div>
    </div>
  )
}
