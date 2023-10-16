import Button from '@danver-io/danver-design-system/dist/component/button/Button'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
    const {t, lang} = useTranslation('common')

    return (
        <div className={'p-[20px]'}>
            <Button label={t('title')} variant={'danger'} />
        </div>
    )
}
