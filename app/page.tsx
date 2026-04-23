import type { Metadata } from 'next'
import ShowcaseGrid from "@/components/showcase-grid"
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/ogp_template_library.png`,
        width: 1200,
        height: 630,
      },
    ],
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
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          HTML・CSS・Tailwind・Next.jsなど様々な技術スタックに対応し、ダウンロードしてすぐ使えるデザインを一覧で比較できます。
          <br /><br />
          また、Jamstack構成やヘッドレスCMS（microCMS・Contentfulなど）に対応したテンプレートも掲載しており、モダンなWeb制作にも活用できます。
          ランディングページ（LP）やコーポレートサイト、ポートフォリオなど用途別に探せるため、初心者から制作会社まで幅広く対応しています。
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
