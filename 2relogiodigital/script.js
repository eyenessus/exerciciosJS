function atualizacaoRelogio()
{
   
    const horasElemento = document.querySelector(".hours")
    const elementElemento = document.querySelector(".minutes")
    const secondElemento = document.querySelector(".seconds")
    const now = new Date();
    const hora = now.getHours().toString().padStart(2,"0");
    const minuto = now.getMinutes().toString().padStart(2,"0");
    const segundo = now.getSeconds().toString().padStart(2,"0");

    horasElemento.textContent = hora;
    elementElemento.textContent = minuto;
    secondElemento.textContent = segundo;
}

atualizacaoRelogio()

console.log(32432432)