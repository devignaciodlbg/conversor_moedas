const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
  const amountValue = document.querySelector('.input-currency').value
  const valueToConvert = document.querySelector('.currency-value-to-convert')
  const valueConverted = document.querySelector('.currency-value')

  const dolarToday = 5
  const euroToday = 6

  if (currencySelect.value == 'dolar') {
    valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amountValue / dolarToday)
  }

  if (currencySelect.value == 'euro') {
    valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(amountValue / euroToday)
  }

  valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amountValue)
}

function changeCurrency() {
  const currencyName = document.getElementById('currency-name')
  const currencyImage = document.querySelector('.currency-img')

  if (currencySelect.value == 'dolar') {
    currencyName.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/dolar.png'
  }

  if (currencySelect.value == 'euro') {
    currencyName.innerHTML = 'Euro'
    currencyImage.src = './assets/euro.png'
  }

  convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)
