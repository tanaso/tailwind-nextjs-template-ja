import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import CardSection from '@/components/section/CardSection'
import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <SectionContainer>
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
            事業内容
          </h1>
          <p className="text-lg leading-7 text-gray-500">
            Showcase your projects with a hero image (16 x 9)
          </p>
        </div>
        {/* 画像左、テキスト右 */}
        <CardSection
          imgLeft={true}
          imageSrc="/static/images/time-machine.jpg"
          imageAlt="派遣事業イメージ"
          title="人材派遣事業"
          description="こちらは人材派遣事業に関するご説明です。左側に画像、右側にテキストが表示されます。"
        />

        {/* 画像右、テキスト左 */}
        <CardSection
          imgLeft={false}
          imageSrc="/static/images/time-machine.jpg"
          imageAlt="IT事業イメージ"
          title="IT 開発事業"
          description="こちらはIT開発事業に関するご説明。画像は右側、テキストは左側に表示されます。"
        />

        {/* 画像左、テキスト右 */}
        <CardSection
          imgLeft={true}
          imageSrc="/static/images/time-machine.jpg"
          imageAlt="派遣事業イメージ"
          title="人材派遣事業"
          description="こちらは人材派遣事業に関するご説明です。左側に画像、右側にテキストが表示されます。"
        />
        {/* <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div> */}
      </div>
    </SectionContainer>
  )
}
