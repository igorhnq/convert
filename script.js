const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector("form");
const currency = document.getElementById("currency");
const amount = document.getElementById("amount");

addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    switch(currency.value) {
        case "USD":
            convertCurrency(currency.value, USD, "$USD");
            break
        case "EUR":
            convertCurrency(currency.value, EUR, "€");
            break
        case "GBP":
            convertCurrency(currency.value, GBP, "£");
            break
    }
})

function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol);
}