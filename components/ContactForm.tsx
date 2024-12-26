'use client' // ← クライアントコンポーネント

import React, { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 入力値をAPIにPOST
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) {
        throw new Error(`Fetch error: ${res.statusText}`)
      }

      const result = await res.json()
      setStatusMessage(result.message) // "お問い合わせを受け付けました" など
      // フォームをリセットする場合
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatusMessage('エラーが発生しました。もう一度お試しください。')
    }
  }

  return (
    <div className="mx-auto max-w-xl p-4">
      <h1 className="mb-4 text-2xl font-bold">お問い合わせ</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 企業、団体名 */}
        <div>
          <label htmlFor="company" className="mb-1 block font-medium">
            企業、団体名
          </label>
          <input type="text" id="company" className="w-full rounded border-gray-300 p-2" required />
        </div>

        {/* 氏名 */}
        <div>
          <label htmlFor="name" className="mb-1 block font-medium">
            ご担当者名
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded border-gray-300 p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* メールアドレス */}
        <div>
          <label htmlFor="email" className="mb-1 block font-medium">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded border-gray-300 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* 電話番号 */}
        <div>
          <label htmlFor="tel" className="mb-1 block font-medium">
            電話番号
          </label>
          <input type="tel" id="tel" className="w-full rounded border-gray-300 p-2" required />
        </div>

        {/* メッセージ */}
        <div>
          <label htmlFor="message" className="mb-1 block font-medium">
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            className="w-full rounded border-gray-300 p-2"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          上記の内容で送信する
        </button>
      </form>

      {/* 送信結果やエラーメッセージを表示 */}
      {statusMessage && <p className="mt-4 text-sm text-gray-700">{statusMessage}</p>}
    </div>
  )
}
