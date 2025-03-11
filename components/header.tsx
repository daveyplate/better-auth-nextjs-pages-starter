import { GitHubIcon, UserButton } from "@daveyplate/better-auth-ui"
import Link from "next/link"

import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b px-4 py-3 bg-background/60 backdrop-blur">
            <div className="container flex justify-between items-center mx-auto">
                <Link href="/" className="flex gap-2 items-center">
                    <svg
                        className="size-5"
                        fill="none"
                        height="45"
                        viewBox="0 0 60 45"
                        width="60"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="fill-black dark:fill-white"
                            clipRule="evenodd"
                            d="M0 0H15V45H0V0ZM45 0H60V45H45V0ZM20 0H40V15H20V0ZM20 30H40V45H20V30Z"
                            fillRule="evenodd"
                        />
                    </svg>
                    BETTER-AUTH. STARTER
                </Link>

                <div className="flex gap-2 items-center">
                    <Link
                        href="https://github.com/daveyplate/better-auth-nextjs-pages-starter"
                        target="_blank"
                    >
                        <Button variant="outline" size="icon" className="size-8 rounded-full">
                            <GitHubIcon />
                        </Button>
                    </Link>

                    <ModeToggle />
                    <UserButton />
                </div>
            </div>
        </header>
    )
}
