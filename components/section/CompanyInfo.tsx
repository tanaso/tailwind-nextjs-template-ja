// components/CompanyInfo.tsx
import React from 'react'
import SectionContainer from '@/components/SectionContainer'

export default function CompanyInfo() {
  return (
    <SectionContainer>
      {/* 上部見出し */}
      <div className="my-8">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-2xl md:text-2xl">会社概要</h2>
      </div>

      {/* テーブル形式で会社情報を表示 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-gray-800">
          <tbody>
            {/* 会社名 */}
            <tr className="border-t border-gray-300">
              <th className="w-1/3 px-4 py-3 font-bold sm:w-1/4">会社名</th>
              <td className="px-4 py-3">株式会社 ISSEN</td>
            </tr>
            {/* 所在地 */}
            <tr className="border-t border-gray-300">
              <th className="px-4 py-3 font-bold">所在地</th>
              <td className="px-4 py-3">
                〒188-0002
                <br />
                東京都武蔵野市吉祥寺東町1-10-4 グランテラスG24
              </td>
            </tr>
            {/* TEL/FAX */}
            <tr className="border-t border-gray-300">
              <th className="px-4 py-3 font-bold">TEL/FAX</th>
              <td className="px-4 py-3">042-452-9551</td>
            </tr>
            {/* 代表者 */}
            <tr className="border-t border-gray-300">
              <th className="px-4 py-3 font-bold">代表者</th>
              <td className="px-4 py-3">佐藤 圭介</td>
            </tr>
            {/* 設立 */}
            <tr className="border-t border-gray-300">
              <th className="px-4 py-3 font-bold">設立</th>
              <td className="px-4 py-3">令和3年2月25日</td>
            </tr>
            {/* 資本金 */}
            <tr className="border-t border-gray-300">
              <th className="px-4 py-3 font-bold">資本金</th>
              <td className="px-4 py-3">5百万円</td>
            </tr>
            {/* 年商 */}
            <tr className="border-t border-gray-300">
              <th className="px-4 py-3 font-bold">年商</th>
              <td className="px-4 py-3">2億2千万円（2023年度）</td>
            </tr>
            {/* 事業内容 */}
            <tr className="border-t border-gray-300">
              <th className="px-4 py-3 font-bold">事業内容</th>
              <td className="px-4 py-3">内装工事、美容業（LGS、PB工事、リノベーション）</td>
            </tr>
            {/* 従業員数 */}
            <tr className="border-t border-gray-300">
              <th className="px-4 py-3 font-bold">従業員数</th>
              <td className="px-4 py-3">20名</td>
            </tr>
          </tbody>
        </table>
      </div>
    </SectionContainer>
  )
}
