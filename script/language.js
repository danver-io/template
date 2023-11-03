const fs = require('fs')
const axios = require('axios')
const csvParser = require('csv-parser')

const supportLanguages = ['en', 'ko']

const sheetID = '10RiGR9Y-t62vHKgBQSShPhFuKur1SxxM4097-XccxqQ'
const url = `https://docs.google.com/spreadsheets/d/${sheetID}/export?format=csv`

console.log('[CSV Translations] start language program')
console.log('[CSV Translations] supported languages:', supportLanguages)

const results = []
const translations = {}

supportLanguages.forEach(code => {
    translations[code] = {}
})

const loadFromDrive = async () => {
    const st = await axios.get(url, {responseType: 'stream'})
    st.data.pipe(fs.createWriteStream(`./lang.csv`))

    setTimeout(async () => {
        fs.createReadStream(`./lang.csv`)
            .on('error', () => {
                console.log('error happened')
            })
            .pipe(csvParser())
            .on('data', row => results.push(row))
            .on('end', async () => {
                results.forEach(item => {
                    let keyID = ''

                    for (const [key, value] of Object.entries(item)) {
                        if (key === 'key') {
                            keyID = value
                        } else {
                            supportLanguages.forEach(code => {
                                if (key === code && keyID) {
                                    translations[code][keyID] = value
                                }
                            })
                        }
                    }
                })

                console.log('[CSV Translations] Saving files...')

                for (const [key, value] of Object.entries(translations)) {
                    fs.writeFileSync(`./${key}.json`, JSON.stringify(value, null, 2))

                    if (fs.existsSync(`./public/locales/${key}/common.json`)) {
                        fs.unlinkSync(`./public/locales/${key}/common.json`)
                    }

                    fs.renameSync(`./${key}.json`, `./public/locales/${key}/common.json`)
                }

                fs.unlinkSync(`./lang.csv`)

                console.log('[CSV Translations] Completed!')
            })
    }, 1000)
}

loadFromDrive().then(() => {})
