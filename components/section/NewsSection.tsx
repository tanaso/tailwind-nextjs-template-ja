import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import ArticleExcerpt from '@/components/ArticleExcerpt'

const MAX_DISPLAY = 3

export default function NewsSection({ posts }) {
  return (
    <SectionContainer>
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
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
  )
}
