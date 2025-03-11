import { createAuthHooks } from "@daveyplate/better-auth-tanstack"
import { createAuthUIHooks } from "@daveyplate/better-auth-ui"

import { authClient } from "@/lib/auth-client"

export const {
    useListAccounts,
    useListDeviceSessions,
    useListPasskeys,
    useListSessions,
    usePrefetchSession,
    useSession,
    useToken
} = createAuthHooks(authClient)

export const { useAuthenticate } = createAuthUIHooks(authClient)
