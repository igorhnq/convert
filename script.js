const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector("form");
const currency = document.getElementById("currency");
const amount = document.getElementById("amount");

const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    switch(currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "$USD");
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break
    }
})

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        footer.classList.add("show-result");
        const total = formatCurrencyBRL(amount * price).replace("R$", "");
        result.textContent = `${total} Reais`;
    } catch (error) {
        footer.classList.remove("show-result");
        alert("Não foi possível converter!");  
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
