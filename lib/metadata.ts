export const siteConfig = {
  name: 'Template Library',
  title: '無料ホームページテンプレート | Template Library',
  description:
    '商用利用可能な無料ホームページテンプレートを厳選して掲載。カテゴリやタグで絞り込みながら、あなたの制作に最適なデザインを見つけられます。',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}
