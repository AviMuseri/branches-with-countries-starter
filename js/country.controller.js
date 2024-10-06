'use strict'

function onGetCountryInfo() {
    console.log('Hi')
    const elInput = document.querySelector('.input-country')
    getCountryByName(elInput.value).then(renderInfo)
}

function renderInfo(data) {
    console.log(data)

}