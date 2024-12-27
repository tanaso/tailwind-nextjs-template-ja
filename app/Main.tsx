import NewsSection from '@/components/section/NewsSection'
import ThreeColumnSection from '@/components/section/ThreeColumnSection'
import AccessSection from '@/components/section/AccessSection'
import TopImageSection from '@/components/section/TopImageSection'

export default function Home({ posts }) {
  return (
    <>
      <TopImageSection text={'唯一無二'} />
      <ThreeColumnSection />
      <NewsSection posts={posts} />
      <AccessSection />
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
