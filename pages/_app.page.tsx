import type {AppProps} from 'next/app'
import './globals.css'
import {appWithTranslation, useTranslation} from 'next-i18next'
import React from 'react'

const MyApp = ({Component, pageProps}: AppProps) => {
    const {t} = useTranslation()

    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default appWithTranslation(MyApp)
