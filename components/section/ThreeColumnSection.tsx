import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'

export default function ThreeColumnSection() {
  return (
    <SectionContainer>
      {/* タイトルと説明文 */}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
          事業内容
        </h1>
        <p className="text-lg leading-7 text-gray-500">{siteMetadata.description}</p>
      </div>

      {/* ここでグリッドレイアウトを指定 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* --- 1枚目のカード --- */}
        <div className="rounded-lg bg-white p-4 shadow-md">
          <img
            className="h-48 w-full rounded-md object-cover"
            src="/static/images/time-machine.jpg"
            alt="人材派遣事業"
          />
          <h2 className="mt-4 text-lg font-semibold text-gray-800">人材派遣事業</h2>
          <p className="mt-2 text-gray-600">
            MirocStaff株式会社は派遣契約の期間や業務内容、将来的な採用計画など...
          </p>
        </div>

        {/* --- 2枚目のカード --- */}
        <div className="rounded-lg bg-white p-4 shadow-md">
          <img
            className="h-48 w-full rounded-md object-cover"
            src="/static/images/time-machine.jpg"
            alt="人材紹介事業"
          />
          <h2 className="mt-4 text-lg font-semibold text-gray-800">人材紹介事業</h2>
          <p className="mt-2 text-gray-600">
            MirocStaff株式会社は高スキルの若手人材、外国籍のグローバル人材、障がい者人材...
          </p>
        </div>

        {/* --- 3枚目のカード --- */}
        <div className="rounded-lg bg-white p-4 shadow-md">
          <img
            className="h-48 w-full rounded-md object-cover"
            src="/static/images/time-machine.jpg"
            alt="IT開発事業"
          />
          <h2 className="mt-4 text-lg font-semibold text-gray-800">IT 開発事業</h2>
          <p className="mt-2 text-gray-600">
            MirocStaff株式会社は人材事業を通じて未来の労働力に代わるロボット開発などにも...
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}
