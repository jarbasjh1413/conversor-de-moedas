
let botao = document.getElementById("botao");
let select = document.getElementById("select-moedas");


async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    });

    let dolar = moedas.USDBRL.high;
    let euro = moedas.EURBRL.high;


    let inputValorReais = Number(document.getElementById("input").value);
    let inputMoedas = document.getElementById("input-moedas");
    let labelReal = document.getElementById("label-real");


    if (select.value === "US$ Dolar Americano") {
        let valorEmDolares = inputValorReais / dolar;
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    } else if (select.value === "€ Euro") {
        let valorEmEuro = inputValorReais / euro;
        inputMoedas.innerHTML = valorEmEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });

    }

    labelReal.innerHTML = inputValorReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function trocaDeMoeda() {
    let labelConversao = document.getElementById("label-conversao");
    let picConversao = document.getElementById("pic-conversao");
   
    if (select.value === "US$ Dolar Americano") {

        labelConversao.innerHTML = "Dólar Americano";
        picConversao.src = "./img/usa.png";

    } else if (select.value === "€ Euro") {

        labelConversao.innerHTML = "Euro";
        picConversao.src = "./img/eua.png";
    }
    converterMoedas();
}



select.addEventListener("change", trocaDeMoeda);
botao.addEventListener("click", converterMoedas);
