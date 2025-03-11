import { AuthCard } from "@daveyplate/better-auth-ui"
import { authViewPaths } from "@daveyplate/better-auth-ui/server"
import Link from "next/link"

import { cn } from "@/lib/utils"

export default function AuthPage({ pathname }: { pathname: string }) {
    return (
        <main className="flex flex-col grow p-4 gap-3 items-center justify-center">
            <AuthCard pathname={pathname} />

            <p
                className={cn(
                    ["callback", "settings", "sign-out"].includes(pathname) && "hidden",
                    "text-muted-foreground text-xs"
                )}
            >
                Powered by{" "}
                <Link
                    className="underline text-warning"
                    href="https://better-auth.com"
                    target="_blank"
                >
                    better-auth.
                </Link>
            </p>
        </main>
    )
}

export async function getStaticPaths() {
    return {
        paths: Object.values(authViewPaths).map((pathname) => ({ params: { pathname } })),
        fallback: false
    }
}

export async function getStaticProps({ params }: { params: { pathname: string } }) {
    return { props: { pathname: params.pathname } }
}
