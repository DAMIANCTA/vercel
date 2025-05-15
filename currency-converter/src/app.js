const exchangeRates = {
    USD: { EUR: 0.91, MXN: 17.5, USD: 1 },
    EUR: { USD: 1.1, MXN: 19.2, EUR: 1 },
    MXN: { USD: 0.057, EUR: 0.052, MXN: 1 },
};

document.getElementById('convert-btn').addEventListener('click', convertCurrency);

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const rate = exchangeRates[fromCurrency]?.[toCurrency];
    if (!rate) {
        alert('Invalid conversion between these currencies');
        return;
    }

    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}