import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import ArticleExcerpt from '@/components/ArticleExcerpt'

export default function AccessSection() {
  return (
    <SectionContainer>
      <div className="space-y-6">
        {/* タイトルや説明 */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">アクセス</h1>
          <p className="text-gray-700">
            弊社オフィスへのアクセス情報です。下記の地図を参考にお越しください。
          </p>
        </div>

        {/* Google Map 埋め込み（Iframe形式） */}
        <div className="w-full overflow-hidden rounded-lg shadow-md">
          <iframe
            title="Company Location"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            // ここは実際の住所や座標、プレイスIDなどに合わせて変更してください
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.9559877084783!2d139.69985031600644!3d35.6580349802009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9ea146a5b3%3A0x783ab5feca0cd5bf!2z5qCq5byP5Lya56S-44Oj44Oz44Kw44K6!5e0!3m2!1sja!2sjp!4v1683888000000"
          />
        </div>

        {/* 住所や連絡先の表示例 */}
        <address className="not-italic text-gray-700">
          <p>〒000-0000</p>
          <p>東京都渋谷区神南1-19-11</p>
          <p>TEL: 03-1234-5678</p>
        </address>
      </div>
    </SectionContainer>
  )
}
