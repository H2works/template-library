export default async function getTagList() {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/rcms-api/2/tag/list`
  )

  const response = await fetch(url.toString(), {
    headers: {
      "X-RCMS-API-ACCESS-TOKEN":
        process.env.NEXT_PUBLIC_STATIC_TOKEN || "",
    },
  })

  return await response.json()
}
