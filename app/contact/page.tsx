import type { Metadata } from 'next'
import { siteConfig } from '@/lib/metadata'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: `Contact - ${siteConfig.title}`,
  description: 'Contact us - Template Library',
  openGraph: {
    title: `Contact - ${siteConfig.title}`,
    description: 'Contact us - Template Library',
    url: `${siteConfig.url}/contact`,
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          お問い合わせやご相談はこちらのフォームからお気軽にお送りください。
        </p>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border bg-card p-8">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
