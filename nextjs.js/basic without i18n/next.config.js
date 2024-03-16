module.exports = {
    images: {
        domains: ['*'],
        dangerouslyAllowSVG: true,
        minimumCacheTTL: 108000,
    },
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
