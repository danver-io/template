'use client'
import useTranslation from 'next-translate/useTranslation'
import Button from '@danver-io/danver-design-system/dist/component/button/Button'

export default function Home() {
    const {t, lang} = useTranslation('common')

    return (
        <div className={'p-[20px]'}>
            <p className={'text-title.large'}>제목</p>
            <Button label={t('title')} variant={'primary'} isLoading={true} />
        </div>
    )
}
