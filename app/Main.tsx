import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import ArticleExcerpt from '@/components/ArticleExcerpt'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import SectionContainer from '@/components/SectionContainer'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      <div className="relative">
        <img
          src="/static/images/time-machine.jpg"
          alt="banner"
          className="h-screen w-screen object-cover"
        />
      </div>
      <SectionContainer>
        <div className="divide-y divide-gray-200">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              お知らせ
            </h1>
            <p className="text-lg leading-7 text-gray-500">{siteMetadata.description}</p>
          </div>
          <ul className="divide-y divide-gray-200">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => (
              <ArticleExcerpt key={post.slug} post={post} locale={siteMetadata.locale} />
            ))}
          </ul>
        </div>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end py-8 text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600"
              aria-label="All posts"
            >
              全ての投稿 &rarr;
            </Link>
          </div>
        )}
      </SectionContainer>
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
