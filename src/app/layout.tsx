import type {Metadata} from "next";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
import {Providers} from './providers'

export const metadata: Metadata = {
    title: "Spy Cat Agency",
    description: "Spy Cat Agency Admin Panel",
};

export default function RootLayout(
    {children}: {
        children: React.ReactNode;
    }) {
    return (
        <html lang="en">
        <body>
        <AppRouterCacheProvider>
            <Providers>
                {children}
            </Providers>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
