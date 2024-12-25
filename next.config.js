import { withContentlayer } from 'next-contentlayer2'
import withBundleAnalyzer from '@next/bundle-analyzer'

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined
const unoptimized = process.env.UNOPTIMIZED ? true : undefined

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  output: 'export',
  basePath,
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['app', 'components', 'layouts', 'scripts'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    unoptimized: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

// プラグインを適用
const configWithPlugins = [withContentlayer, bundleAnalyzer].reduce(
  (acc, next) => next(acc),
  nextConfig
)

export default configWithPlugins
