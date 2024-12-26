// components/MissionSubSection.tsx
import React from 'react'
import SectionContainer from '@/components/SectionContainer'

interface MissionSectionProps {
  title: string
  content: string
}

export default function MissionSection() {
  return (
    <SectionContainer>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <div className="mb-8">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
            ミッション
          </h2>
        </div>

        <div className="space-y-2">
          {/* サブ見出し */}
          <h3 className="text-base font-bold text-gray-800 sm:text-xl">
            柔軟性と効率性、社会貢献への取り組み
          </h3>
          {/* 本文 */}
          <p className="leading-relaxed text-gray-700">
            弊社は、思い立った時にすぐ行動を起こせる柔軟性を持っています。
            スピーディーで効率的な意思決定を行い、変化する環境にも素早く対応できるように努めています。
            さらに、社会貢献活動への参加や地域貢献活動を通じて、私たちのやさしさを広めることも大切にしています。
            持続可能な社会の実現に向け、積極的な取り組みを続け、社会全体に善意を広めていくことを目指しています。
          </p>
        </div>

        <div className="space-y-2">
          {/* サブ見出し */}
          <h3 className="text-base font-bold text-gray-800 sm:text-xl">
            柔軟性と効率性、社会貢献への取り組み
          </h3>
          {/* 本文 */}
          <p className="leading-relaxed text-gray-700">
            弊社は、思い立った時にすぐ行動を起こせる柔軟性を持っています。
            スピーディーで効率的な意思決定を行い、変化する環境にも素早く対応できるように努めています。
            さらに、社会貢献活動への参加や地域貢献活動を通じて、私たちのやさしさを広めることも大切にしています。
            持続可能な社会の実現に向け、積極的な取り組みを続け、社会全体に善意を広めていくことを目指しています。
          </p>
        </div>

        <div className="space-y-2">
          {/* サブ見出し */}
          <h3 className="text-base font-bold text-gray-800 sm:text-xl">
            柔軟性と効率性、社会貢献への取り組み
          </h3>
          {/* 本文 */}
          <p className="leading-relaxed text-gray-700">
            弊社は、思い立った時にすぐ行動を起こせる柔軟性を持っています。
            スピーディーで効率的な意思決定を行い、変化する環境にも素早く対応できるように努めています。
            さらに、社会貢献活動への参加や地域貢献活動を通じて、私たちのやさしさを広めることも大切にしています。
            持続可能な社会の実現に向け、積極的な取り組みを続け、社会全体に善意を広めていくことを目指しています。
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}
