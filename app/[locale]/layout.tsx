import 'css/tailwind.css'
import 'css/extractedStyles.css'
import 'css/globals.css'

import 'pliny/search/algolia.css'

import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { useState } from 'react'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import ClientLayout from './ClientLayout'
import { Cookies, allCookies } from 'contentlayer/generated'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const cookies = allCookies.find((p) => {
    console.log({
      id: p._id,
      local: locale,
    })
    return p._id.split('/')[1].includes(locale)
  }) as Cookies
  const jsonLd = cookies?.structuredData

  const messages = useMessages()
  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://res.cloudinary.com/dizm8txou/image/upload/v1715953409/about-us/static/favicons/falvicon.ico"
        />

        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <script
          defer
          data-domain="about-us.gutricious.com"
          src="https://plausible.gutricious.com/js/script.js"
        ></script>
      </head>
      <body className="min-h-screen  bg-white text-black antialiased dark:bg-gray-950 ">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProviders>
            <ClientLayout cookiesData={{ cookies, jsonLd }}>{children}</ClientLayout>
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
