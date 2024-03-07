const converterBotao = document.querySelector("button#converter")
const moedaSelect = document.querySelector("select#moeda-select")
function converterValores(){
    const inputMoedaValor = document.querySelector("input#input-valor").value
    const aconverter = document.querySelector(".moeda-valor-a-converter")
    const convertido = document.querySelector(".moeda-valor")
    console.log(moedaSelect.value)
    const dolarHoje = 5.2
    const euroHoje = 6.2

    if(moedaSelect.value == "dolar"){
        convertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / dolarHoje) 
    }
    if(moedaSelect.value == "euro"){
        convertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"    
        }).format(inputMoedaValor / euroHoje)
    }

    aconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoedaValor) 

    console.log(converter)
}

function changeMoeda(){
    const moedaNome = document.getElementById("dolar")
    const moedaImg = document.getElementById("eua")
    
    if(moedaSelect.value == "dolar"){
        moedaNome.innerHTML = "Dólar Americano"
        moedaImg.src = "./assets/dolar.png"
    }
    if(moedaSelect.value == "euro"){
        moedaNome.innerHTML = "Euro"
        moedaImg.src = "./assets/euro.png"
    }
    converterValores()
}
moedaSelect.addEventListener("change", changeMoeda)
converterBotao.addEventListener("click", converterValores)