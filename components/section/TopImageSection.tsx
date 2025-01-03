import SectionContainer from '@/components/SectionContainer'
import Image from 'next/image'

export default function TopImageSection({ text }) {
  return (
    <div className="relative">
      <img
        src="/static/images/forest.webp"
        alt="banner"
        className="h-screen w-screen object-cover"
      />
      {/* 画像の上にテキストを配置 */}
      <SectionContainer>
        {/*中央より配置  */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-6xl">{text}</h1>
          </div> */}

        {/* // 右寄り配置 */}
        <div className="absolute inset-0 flex items-center justify-end pr-8">
          <h1 className="whitespace-normal break-words text-4xl font-bold text-white drop-shadow-lg sm:text-6xl">
            {text}
          </h1>
        </div>

        {/* // 左寄り配置 */}
        {/* <div className="absolute inset-0 flex items-center justify-start pl-8">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-6xl">{text}</h1>
          </div> */}
      </SectionContainer>
    </div>
  )
}
