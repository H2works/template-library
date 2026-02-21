import type { Metadata } from 'next'
import ShowcaseGrid from "@/components/showcase-grid"
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: 'website',
  },
}

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          無料ホームページテンプレート
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          商用利用可能な無料ホームページテンプレートを厳選して掲載。
          カテゴリやタグで絞り込みながら、あなたの制作に最適なデザインを見つけられます。
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
