import type {AppProps} from 'next/app'
import './globals.css'
import './reset.css'
import React, {useState} from 'react'
import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query'

const MyApp = ({Component, pageProps}: AppProps) => {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                </Hydrate>
            </QueryClientProvider>
        </>
    )
}

export default MyApp
