//selecionar elementos

const inputElemento = document.querySelector('#input')
const fromElemento = document.querySelector('#from')
const toElemento = document.querySelector('#to')
const outPutElemento = document.querySelector('#output')
const buttonElemento = document.querySelector('#convert-btn')
const messageElemento = document.querySelector('#message')
//funcao para converter as unidades
function converter() {
    const fromValor = fromElemento.value
    const toValor = toElemento.value


    if (fromValor == toValor) {
        outPutElemento.value = inputElemento.value;
        messageElemento.textContent = '';
        return
    }

    //converter entrada para metros
    let metros;
    switch (fromValor) {
        case "m":
            metros = inputElemento.value;
            break;
        case "km":
            metros = inputElemento.value * 100;
            break;
        case "cm":
            metros = inputElemento.value / 100;
            break;
        case "mm":
            metros = inputElemento.value / 1000;
            break;
        default:
            break;
    }

    let resultado;
    switch (toValor) {
        case "m":
            resultado = metros
            break;
        case "km":
            resultado = metros * 1000;
            break;
        case "cm":
            resultado = metros * 100;
            break;
        case "mm":
            resultado = metros * 1000;
            break;
        default:
            break;
    }
    //exbir calculos
    outPutElemento.value = resultado;

    //exibir mensagem

    const fromLabel = fromElemento.options[fromElemento.selectedIndex].text;
    const toLabel = toElemento.options[toElemento.selectedIndex].text;

    const message = `${inputElemento.value} ${fromLabel} equivalem a ${resultado} ${toLabel}`;
    messageElemento.textContent = message;
    return message;

}

//converter metros em uunidade de saida

buttonElemento.addEventListener('click', converter)