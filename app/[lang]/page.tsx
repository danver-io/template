'use client'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
    const {t, lang} = useTranslation('common')

    return (
        <div className={'p-[20px]'}>
            <p className={'text-title.large'}>{t('app_title')}</p>
        </div>
    )
}
