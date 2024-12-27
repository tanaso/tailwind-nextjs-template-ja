import NewsSection from '@/components/section/NewsSection'
import ThreeColumnSection from '@/components/section/ThreeColumnSection'
import AccessSection from '@/components/section/AccessSection'

export default function Home({ posts }) {
  return (
    <>
      <div className="relative">
        <img
          src="/static/images/forest.webp"
          alt="banner"
          className="h-screen w-screen object-cover"
        />
      </div>
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
