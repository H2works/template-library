export default async function getCategoryList() {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/rcms-api/2/topicscategory/list`
  )

  const response = await fetch(url.toString(), {
    headers: {
      "X-RCMS-API-ACCESS-TOKEN":
        process.env.NEXT_PUBLIC_STATIC_TOKEN || "",
    },
  })

  return await response.json()
}