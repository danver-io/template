import './globals.css'
import Image from 'next/image'
import {IHeadlessNavButton} from '@danver-io/danver-design-system/dist/component/navigation/ResponsiveHeader/HeadlessNavButton'
import {ResponsiveHeader} from '@danver-io/danver-design-system'

const menus: IHeadlessNavButton[] = [
    {name: 'Menu1', href: '/menu1'},
    {name: 'Menu2', href: '/menu2'},
    {name: 'Menu3', href: '/menu3'},
]

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={`flex flex-col min-hscreen relative`}>
                <ResponsiveHeader
                    className={'bg-bg.inset'}
                    items={menus}
                    logo={
                        <a href="https://flowbite.com/" className="flex items-center gap-x-[12px]">
                            <Image
                                src="https://flowbite.com/docs/images/logo.svg"
                                width={32}
                                height={32}
                                unoptimized={true}
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Flowbite
                            </span>
                        </a>
                    }
                />
                <main className={'grow flex'}>
                    <div className={'grow'}>{children}</div>
                </main>
            </body>
        </html>
    )
}
