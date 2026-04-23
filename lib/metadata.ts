export const siteConfig = {
  name: 'Template Library',
  title: '無料ホームページテンプレート | Template Library',
  description:
    'HTML・CSS・Tailwind・Next.jsなど様々な技術スタックに対応し、ダウンロードしてすぐ使えるデザインを一覧で比較できます。また、Jamstack構成やヘッドレスCMS（microCMS・Contentfulなど）に対応したテンプレートも掲載しており、モダンなWeb制作にも活用できます。 ランディングページ（LP）やコーポレートサイト、ポートフォリオなど用途別に探せるため、初心者から制作会社まで幅広く対応しています。',
  url: 'https://template-library.h2works.xyz',
  locale: 'ja_JP',
  icon: '/favicon.ico',
  author: 'Template Library',
  keywords: [
    'テンプレート',
    'ホームページ',
    'Webデザイン',
    'HTML',
    'CSS',
    '無料',
    'テンプレート集',
  ],
}

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | Template Library',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: '/ogp_template_library.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/ogp_template_library.png'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
}
