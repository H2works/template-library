import { ShowcaseGrid } from "@/components/showcase-grid"

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Template Library
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Discover curated templates built by the community. Browse by
          category, filter by tags, and find inspiration for your next build.
        </p>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <ShowcaseGrid />
        </div>
      </div>
    </main>
  )
}
