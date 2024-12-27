import NewsSection from '@/components/section/NewsSection'
import ThreeColumnSection from '@/components/section/ThreeColumnSection'
import AccessSection from '@/components/section/AccessSection'
import TopImage from '@/components/section/TopImage'

export default function Home({ posts }) {
  return (
    <>
      <TopImage text={'唯一無二の空間を創造するお客様の理想を形にする'} />
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
