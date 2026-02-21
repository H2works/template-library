// app/sitemap.ts
import type { MetadataRoute } from "next"
import getCategoryList from "@/fetch/getCategoryList";

export const dynamic = "force-static"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://template-library.h2works.xyz"

  // カテゴリ取得
  const {list} = await getCategoryList()
    const Categorys = list.map((item: any) => {
    const slug = item.slug
    return {
      url: `${baseUrl}/category/${slug}`,
      lastModified: item.ymd ? new Date(item.ymd) : new Date(),
    }
  })

  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/search` },
    ...Categorys,
  ]
}
