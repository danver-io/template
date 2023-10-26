const {i18n} = require('./next-i18next.config')

module.exports = {
    images: {
        domains: ['*'],
        dangerouslyAllowSVG: true,
        minimumCacheTTL: 108000,
    },
    i18n,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}
