import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'

function ArticleExcerpt({ post, locale }) {
  const { slug, date, title, summary, tags } = post

  // 最大文字数
  const MAX_SUMMARY_LENGTH = 100

  // summaryが存在し、100文字を超える場合は切り取り＆"..."を付与
  const truncatedSummary =
    summary?.length > MAX_SUMMARY_LENGTH
      ? summary.substring(0, MAX_SUMMARY_LENGTH) + '...'
      : summary

  return (
    <li className="py-4">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500">
              <time dateTime={date}>{formatDate(date, locale)}</time>
            </dd>
          </dl>
          <div className="xl:col-span-3">
            <div className="">
              <div>
                <h2 className="text-xl font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${slug}`} className="text-gray-900">
                    {title}
                  </Link>
                </h2>
                {/* <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div> */}
              </div>
              <div className="prose max-w-none text-gray-500">{truncatedSummary}</div>
            </div>
            <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600"
                aria-label={`Read more: "${title}"`}
              >
                もっと読む &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}

export default ArticleExcerpt
