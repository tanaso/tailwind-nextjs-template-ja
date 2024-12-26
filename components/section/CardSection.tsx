// components/CardSectionNarrowImage.tsx
import React from 'react'
import SectionContainer from '@/components/SectionContainer'

interface CardSectionProps {
  /** 画像を左に置きたい場合は true, 右に置きたい場合は false */
  imgLeft?: boolean
  /** 画像のパス */
  imageSrc: string
  /** 画像の代替テキスト */
  imageAlt?: string
  /** タイトル文言 */
  title: string
  /** 説明文 */
  description: string
}

export default function CardSection({
  imgLeft = true,
  imageSrc,
  imageAlt = 'サービスイメージ',
  title,
  description,
}: CardSectionProps) {
  // 画像を左に置くパターン (imgLeft = true)
  if (imgLeft) {
    return (
      <div className="mt-8">
        <SectionContainer>
          {/* 左1カラム(画像)、右2カラム(テキスト) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* 左カラム: 画像 */}
            <div className="md:col-span-1">
              <img src={imageSrc} alt={imageAlt} className="h-64 w-full rounded-md object-cover" />
            </div>
            {/* 右カラム: タイトル＆説明 */}
            <div className="flex flex-col justify-center space-y-4 md:col-span-2">
              <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </SectionContainer>
      </div>
    )
  }

  // 画像を右に置くパターン (imgLeft = false)
  return (
    <div className="mt-8">
      <SectionContainer>
        {/* 右1カラム(画像)、左2カラム(テキスト) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* 左カラム: タイトル＆説明 */}
          <div className="order-2 flex flex-col justify-center space-y-4 md:order-1 md:col-span-2">
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>

          {/* 右カラム: 画像 */}
          <div className="order-1 md:order-2 md:col-span-1">
            <img src={imageSrc} alt={imageAlt} className="h-64 w-full rounded-md object-cover" />
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
