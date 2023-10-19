const nextTranslate = require('next-translate-plugin')
const config = nextTranslate({
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
})
config.i18n = undefined

module.exports = config
