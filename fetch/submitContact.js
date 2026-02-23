/**
 * コンタクトフォームを送信
 * @param {Object} params
 * @param {string} params.name - 名前
 * @param {string} params.email - メールアドレス
 * @param {string} params.body - メッセージ内容
 * @returns {Promise<Object>}
 */
export default async function submitContact({ name, email, body } = {}) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/rcms-api/2/inquirymessage/send`
  const token = process.env.NEXT_PUBLIC_STATIC_TOKEN

  if (!url || !token) {
    throw new Error('Contact API URL or token is not configured')
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'X-RCMS-API-ACCESS-TOKEN': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        body,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Contact submission error:', error)
    throw error
  }
}
