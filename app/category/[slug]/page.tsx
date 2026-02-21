import type { Metadata } from 'next'
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { ShowcaseCard } from "@/components/showcase-card"
import getCategoryList from '@/fetch/getCategoryList'
import getContentList from '@/fetch/getContentList'
import { siteConfig } from '@/lib/metadata'

export async function generateStaticParams() {
  const {list} = await getCategoryList()
  return list.map((item: any) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params
  const contents = await getContentList({ contents_type: resolvedParams.slug })

  if (!contents.list || contents.list.length === 0) {
    return {
      title: 'Category Not Found | Template Library',
    }
  }

  const categoryName = contents.list[0].contents_type_nm
  const categoryCount = contents.pageInfo.totalCnt

  return {
    title: `${categoryName}の無料テンプレート一覧`,
    description: `${categoryName}カテゴリの${categoryCount}件のテンプレートを掲載しています。${siteConfig.description}`,
    openGraph: {
      title: `${categoryName}の無料テンプレート一覧`,
      description: `${categoryName}カテゴリのテンプレート一覧。${categoryCount}件のテンプレートを紹介しています。`,
      url: `${siteConfig.url}/category/${resolvedParams.slug}`,
      type: 'website',
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // params が Promise になっている場合に備えて await する
  const resolvedParams = await params
  const contents = await getContentList({contents_type:resolvedParams.slug})
  if (!contents.list || contents.list.length === 0) {
    notFound()
  }
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all templates</span>
        </Link>

        <div className="mb-10 flex items-center gap-3">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {contents.list[0].contents_type_nm}
          </h1>
          <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            {contents.pageInfo.totalCnt}
          </span>
        </div>
    
        {contents.list.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contents.list.map((item: any) => (
              <ShowcaseCard key={item.topics_id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <p className="text-lg font-medium text-foreground">
              No templates in this category yet
            </p>
            <Link
              href="/"
              className="mt-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
            >
              Browse all templates
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}
