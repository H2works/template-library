export default async function getContentList({
  contents_type = "",
  page = 1,
  cnt = 60,
  keyword = "",
  tagIds = [],
} = {}) {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/rcms-api/2/topics/list`
  )

  url.searchParams.append("pageID", String(page))
  url.searchParams.append("cnt", String(cnt))

  if (contents_type) {
    url.searchParams.append("contents_type", contents_type)
  }

  // 🔹 キーワード検索
  if (keyword.trim() !== "") {
    url.searchParams.append(
      "filter",
      `keyword contains "${keyword.trim()}"`
    )
  }

  // 🔹 タグ検索（複数対応）
  if (tagIds.length > 0) {
    tagIds.forEach((id) => {
      url.searchParams.append("tag_id[]", String(id))
    })
  }

  const response = await fetch(url.toString(), {
    headers: {
      "X-RCMS-API-ACCESS-TOKEN":
        process.env.NEXT_PUBLIC_STATIC_TOKEN || "",
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch content list")
  }

  return await response.json()
}
