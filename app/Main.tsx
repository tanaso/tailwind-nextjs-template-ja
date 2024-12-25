import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import ArticleExcerpt from '@/components/ArticleExcerpt'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import SectionContainer from '@/components/SectionContainer'
import NewsSection from '@/components/section/NewsSection'

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
      <NewsSection posts={posts} />
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
