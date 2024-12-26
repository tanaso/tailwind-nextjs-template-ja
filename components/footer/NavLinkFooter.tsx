import Link from '../Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import headerNavLinks from '@/data/headerNavLinks'
import SectionContainer from '@/components/SectionContainer'
import Logo from '@/data/logo.svg'

export default function NavLinkFooter() {
  return (
    <footer className="bottom-0 left-0 z-50 mt-8 w-full bg-gray-100 text-gray-800">
      <SectionContainer>
        <div className="container mx-auto flex flex-col items-center py-8 sm:flex-row sm:justify-between">
          {/* Left Section: Logo */}
          <div className="mb-6 sm:mb-0 sm:w-1/2">
            <div className="flex flex-col items-center sm:items-start">
              <Logo />
              <p className="mt-2 text-center text-lg font-bold sm:text-left">
                {siteMetadata.title}
              </p>
            </div>
          </div>

          {/* Right Section: Navigation Links and Copyright */}
          <div className="flex flex-col items-center sm:w-1/2 sm:items-end">
            {/* Navigation Links */}
            <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block text-base font-medium text-gray-900 hover:text-primary-500"
                  >
                    {link.title}
                  </Link>
                ))}
            </div>

            {/* Copyright Section */}
            <div className="mt-4 text-center text-xs text-gray-500 sm:mt-6 sm:text-right">
              <p>
                © {new Date().getFullYear()} {siteMetadata.title}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}
