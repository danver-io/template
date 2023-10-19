'use client'
import useTranslation from 'next-translate/useTranslation'
import Icon from '@/public/image/next.svg'

export default function Home() {
    const {t, lang} = useTranslation('common')

    return (
        <div className={'p-[20px]'}>
            <p className={'text-title.large'}>{t('app_title')}</p>
            <Icon className={'fill-amber-500'} />
        </div>
    )
}
