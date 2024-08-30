document.getElementById('convert-btn').addEventListener('click', convertCurrency);

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (amount === '' || amount <= 0) {
        displayResult('Por favor, insira um valor válido.');
        return;
    }

    const apiKey = 'sua_api_key_aqui'; // Substitua com sua chave da API
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            displayResult(`${amount} ${fromCurrency} é equivalente a ${convertedAmount} ${toCurrency}.`);
        })
        .catch(error => {
            displayResult('Erro ao converter. Tente novamente.');
        });
}

function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}
