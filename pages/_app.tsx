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
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <Providers>
                <div className="flex flex-col min-h-svh">
                    <Header />

                    <Component {...pageProps} />
                </div>

                <Toaster />
            </Providers>
        </>
    )
}
