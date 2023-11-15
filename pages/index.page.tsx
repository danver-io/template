import React from 'react'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

const HomePage: React.FC = () => {
    const {t} = useTranslation()
    return <div>{t('app.title')}</div>
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})

export default HomePage
