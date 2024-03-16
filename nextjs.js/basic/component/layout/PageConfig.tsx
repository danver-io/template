import React from 'react'
import {useTranslation} from 'next-i18next'
import Head from 'next/head'
import {isNotEmpty} from '@/util/strings'
import Compose from '@/util/compose'

interface IProps {
    metaTags?: IMetaTags
    children?: any
    bodyClassName?: string
    pageName?: string
}

interface IMetaTags {
    title?: string
    description?: string
    image?: string
}

const PageConfig: React.FC<IProps> = ({metaTags = {}, bodyClassName = '', pageName, children}) => {
    const {t} = useTranslation()

    return (
        <>
            <Head>
                <meta
                    property="og:title"
                    content={isNotEmpty(metaTags?.title) ? metaTags?.title : t('metaTag.title')}
                />
                <meta
                    name="description"
                    content={isNotEmpty(metaTags?.description) ? metaTags?.description : t('metaTag.description')}
                    key={'desc'}
                />
                <meta
                    property="og:description"
                    content={isNotEmpty(metaTags?.description) ? metaTags?.description : t('metaTag.description')}
                />
                <meta property="og:image" content={isNotEmpty(metaTags?.image) ? metaTags?.image : ''} />
            </Head>

            <div className={`flex flex-col min-h-screen relative ${bodyClassName}`}>
                <Compose items={[]}>
                    <main className={'grow flex'}>
                        <div className={'grow'}>{children}</div>
                    </main>
                </Compose>
            </div>
        </>
    )
}

export default PageConfig
