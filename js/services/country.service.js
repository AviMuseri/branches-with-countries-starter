'use-strict'

function getCountryByName(name) {
    const savedCountry = loadFromStorage(name)
    if (savedCountry) return Promise.resolve(savedCountry)

    return axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => {
            const country = res.data
            return country
        })
        .then(country => {
            saveToStorage(name, country)
            return country
        })
}
