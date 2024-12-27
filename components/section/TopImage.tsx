import SectionContainer from '@/components/SectionContainer'

export default function TopImage({ text }) {
  return (
    <div className="relative">
      <img
        src="/static/images/forest.webp"
        alt="banner"
        className="h-screen w-screen object-cover"
      />
      {/* 画像の上にテキストを配置 */}
      <SectionContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-6xl">{text}</h1>
        </div>
      </SectionContainer>
    </div>
  )
}
