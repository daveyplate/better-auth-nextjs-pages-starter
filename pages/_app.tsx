import type { AppProps } from "next/app"
import Head from "next/head"

import "@/styles/globals.css"

import { Header } from "@/components/header"
import { Providers } from "@/components/providers"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Better Auth Next.js Pages Starter</title>

                <meta
                    name="viewport"
                    content="initial-scale=1, viewport-fit=cover, width=device-width"
                />
                <meta name="theme-color" content="#ffffff" />

                <link rel="manifest" href="/manifest.webmanifest" />
            </Head>

            <Providers>
                <div className="flex min-h-svh flex-col">
                    <Header />

                    <Component {...pageProps} />
                </div>
            </Providers>
        </>
    )
}
