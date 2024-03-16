import React from 'react'
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
    return (
        <>
            <Head>
                <meta
                    property="og:title"
                    content={isNotEmpty(metaTags?.title) ? metaTags?.title : ''}
                />
                <meta
                    name="description"
                    content={isNotEmpty(metaTags?.description) ? metaTags?.description : ''}
                    key={'desc'}
                />
                <meta
                    property="og:description"
                    content={isNotEmpty(metaTags?.description) ? metaTags?.description : ''}
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
