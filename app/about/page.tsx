import type { Metadata } from 'next'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
    title: `About - ${siteConfig.title}`,
    description: 'About Template Library - AI Pair Coding対応の無料フロントエンドテンプレート',
    openGraph: {
        title: `About - ${siteConfig.title}`,
        description: 'About Template Library - AI Pair Coding対応の無料フロントエンドテンプレート',
        url: `${siteConfig.url}/about`,
        type: 'website',
    },
}

export default function AboutPage() {
    return (
        <main>
            {/* Hero */}
            <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    About
                </h1>
            </section>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    {/* Section 1 */}
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-foreground">
                            AI Pair Coding対応のモダンテンプレート
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            バイブコーディングと相性の良いフロントエンドフレームワークで作られた無料で利用できるテンプレートを集めました。最新のテクノロジースタックを採用しているため、AI アシスタント（GitHub Copilot や Claude など）との相性も良く、開発効率を大幅に向上させることができます。
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-foreground">
                            完全無料で利用可能
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            すべてのテンプレートは完全無料で使えます。ライセンスの詳細は各テンプレートの GitHub リポジトリを参照してください。商用利用も可能なテンプレートばかりを厳選して掲載しています。
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-foreground">
                            テンプレート活用のサポート
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            テンプレートの使い方や、あなたのプロジェクトに合わせたカスタマイズ方法など、ご相談に乗ります。テンプレートを選ぶ段階からのアドバイスもお気軽にお問い合わせください。
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-foreground">
                            スポンサー様募集中
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            無料のテンプレートと言いつつ著作表示を消すのにお金がかかったり、分かりにくいライセンス条件があったり、テンプレートが古臭かったりといった問題を是正したいと考えています。
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            このサイトを通じて、本当にクリーンで現代的なテンプレートを無料で提供し続けるため、スポンサー様からのご支援をお待ちしています。ご支援いただける場合は、お気軽にお問い合わせください。
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
