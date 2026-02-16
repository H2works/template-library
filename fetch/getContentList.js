export default async function getContentList({
  contents_type = "",
  page = 1,
  cnt = 60,
} = {}) {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/rcms-api/2/topics/list`
  )

  url.searchParams.append("pageID", String(page))
  url.searchParams.append("cnt", String(cnt))
  url.searchParams.append("contents_type", contents_type)

  const response = await fetch(url.toString(), {
    headers: {
      "X-RCMS-API-ACCESS-TOKEN":
        process.env.NEXT_PUBLIC_STATIC_TOKEN || "",
    },
  })

  return await response.json()
}
