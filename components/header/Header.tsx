'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from '../Link'
import MobileNav from './MobileNav'
import ThemeSwitch from '../ThemeSwitch'
import SearchButton from '../SearchButton'
import SectionContainer from '../SectionContainer'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const isOverlayPath = pathname === '/'

  let headerClass = 'mx-auto w-full max-w-6xl py-4 dark:bg-dark/75 md:rounded-2xl'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }
  if (isOverlayPath) {
    headerClass += ' fixed left-0 right-0 z-10 text-white'
  }

  return (
    <SectionContainer>
      <header className={headerClass}>
        <div className="mx-auto flex max-w-4xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
          <Link href="/" aria-label={siteMetadata.headerTitle} className="flex items-center">
            <div className="animate-wave">
              <Logo className="fill-dark" />
            </div>
            <div className="group ml-2 text-xl font-bold transition duration-300">
              {siteMetadata.headerTitle}
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-[85%]"></span>
            </div>
          </Link>
          <div className="flex items-center gap-3 text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={clsx(
                      'mx-1 rounded px-2 py-1 font-medium text-gray-900 sm:px-3 sm:py-2',
                      pathname.startsWith(link.href)
                        ? 'bg-gray-200 dark:bg-primary-600'
                        : 'hover:bg-gray-200 dark:hover:bg-primary-600'
                    )}
                  >
                    <span data-umami-event={`nav-${link.href.replace('/', '')}`}>{link.title}</span>
                  </Link>
                ))}
            </div>
            <div
              role="separator"
              data-orientation="vertical"
              className="hidden h-4 w-px shrink-0 bg-gray-200 md:block"
            />
            <div className="flex items-center">
              {/* <AnalyticsLink /> */}
              {/* <SearchButton /> */}
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </SectionContainer>
  )
}

export default Header