import type { AppProps } from "next/app"
import Head from "next/head"
import { Toaster } from "sonner"

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
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: light)"
                    content="oklch(1 0 0)"
                />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: dark)"
                    content="oklch(0.145 0 0)"
                />

                <link rel="manifest" href="/manifest.webmanifest" />
            </Head>

            <Providers>
                <div className="flex min-h-svh flex-col">
                    <Header />

                    <Component {...pageProps} />
                </div>

                <Toaster />
            </Providers>
        </>
    )
}
