const regex = document.querySelectorAll("input")
const calcular = document.getElementById("calcular");

const larguraDimensao = document.getElementById("larguraDimensao");
const alturaDimensao = document.getElementById("alturaDimensao");

const tijolo1 = document.getElementById("tijolo1");
const tijolo2 = document.getElementById("tijolo2");

regex.forEach((input) => {
input.addEventListener("input", () =>{
const regexs = /\D+/g;
input.value = input.value.replace(regexs, "")})
})

calcular.addEventListener("click", () =>{

    if(larguraDimensao.value === "" || alturaDimensao.value === ""){
        const resultLH = document.getElementById("resultLH");
        const quantitativo = document.getElementById("quantitativo");
        const margem5 = document.getElementById("margem5");
        const margem10 = document.getElementById("margem10");
        const larguraAlturas = document.getElementById("larguraAlturas");
        const QuantTijolos = document.getElementById("QuantTijolos");

        resultLH.innerText = `0`;
        quantitativo.innerText = `0`;
        margem5.innerText = `0`;
        margem10.innerText = `0`;
        larguraAlturas.innerText = "0";
        QuantTijolos.innerText = "0"
    }

    if(tijolo1.value === "" || tijolo2.value === ""){
        const resultLH = document.getElementById("resultLH");
        const quantitativo = document.getElementById("quantitativo");
        const margem5 = document.getElementById("margem5");
        const margem10 = document.getElementById("margem10");
        const larguraAlturas = document.getElementById("larguraAlturas");
        const QuantTijolos = document.getElementById("QuantTijolos");

        resultLH.innerText = `0`;
        quantitativo.innerText = `0`;
        margem5.innerText = `0`;
        margem10.innerText = `0`;
        larguraAlturas.innerText = "0";
        QuantTijolos.innerText = "0"
    }


function LarguraAltura(){
    const resultLH = document.getElementById("resultLH");
    const resultado = Number(larguraDimensao.value) * Number(alturaDimensao.value);
    resultLH.innerText = `${resultado}m²`; 
    const larguraAlturas = document.getElementById("larguraAlturas");
    larguraAlturas.innerText = `Esses são os valores da largura e da altura das dimensões da área em metros: ${resultado}m²`
}
LarguraAltura()

function calcTijolo (){
    const QuantTijolos = document.getElementById("QuantTijolos");
    const tijolo1EmCM = Number(tijolo1.value) / 100;
    const tijolo2EmCM = Number(tijolo2.value) / 100;
    const valorTijoloTotal = tijolo1EmCM * tijolo2EmCM;
    QuantTijolos.innerText =`Tamanho em metros total do tijolo: ${valorTijoloTotal.toFixed(4)}m²`;

}
calcTijolo()

function QuantitativoTotalTijolo (){
    const quantitativo = document.getElementById("quantitativo");

    const resultado = Number(larguraDimensao.value) * Number(alturaDimensao.value);

    const tijolo1EmCM = Number(tijolo1.value) / 100;
    const tijolo2EmCM = Number(tijolo2.value) / 100;
    const valorTijoloTotal = tijolo1EmCM * tijolo2EmCM;

    const Quantitativos = resultado / valorTijoloTotal;

    quantitativo.innerText = `${Quantitativos.toFixed(0)}`;

    if(Quantitativos === Infinity){
        const resultLH = document.getElementById("resultLH");
        const quantitativo = document.getElementById("quantitativo");
        const margem5 = document.getElementById("margem5");
        const margem10 = document.getElementById("margem10");
        const larguraAlturas = document.getElementById("larguraAlturas");
        const QuantTijolos = document.getElementById("QuantTijolos");

        
        quantitativo.innerText = `0`;
        margem5.innerText = `0`;
        margem10.innerText = `0`;
        larguraAlturas.innerText = " ";
        QuantTijolos.innerText = " "
    }
    

    const margem5 = document.getElementById("margem5");
    const margem5Tijolos = Quantitativos.toFixed(0) * 1.05;
    margem5.innerText = margem5Tijolos.toFixed(0); 

    const margem10 = document.getElementById("margem10");
    const margem10Tijolos = Quantitativos.toFixed(0) * 1.10;
    margem10.innerText = margem10Tijolos.toFixed(0);

    if(margem10Tijolos === Infinity){
        const resultLH = document.getElementById("resultLH");
        const quantitativo = document.getElementById("quantitativo");
        const margem5 = document.getElementById("margem5");
        const margem10 = document.getElementById("margem10");
        const larguraAlturas = document.getElementById("larguraAlturas");
        const QuantTijolos = document.getElementById("QuantTijolos");

        quantitativo.innerText = `0`;
        margem5.innerText = `0`;
        margem10.innerText = `0`;
        larguraAlturas.innerText = " ";
        QuantTijolos.innerText = " "
    }
}
QuantitativoTotalTijolo()
})

calcular.addEventListener("click", ()=>{
    const resultLH = document.getElementById("resultLH");
        const quantitativo = document.getElementById("quantitativo");
        const margem5 = document.getElementById("margem5");
        const margem10 = document.getElementById("margem10");
        const larguraAlturas = document.getElementById("larguraAlturas");
        const QuantTijolos = document.getElementById("QuantTijolos");
    if(tijolo1 === ""){
        resultLH.innerText = `0`;
        quantitativo.innerText = `0`;
        margem5.innerText = `0`;
        margem10.innerText = `0`;
        larguraAlturas.innerText = " ";
        QuantTijolos.innerText = " "
    }

    if(tijolo2 === ""){
        resultLH.innerText = `0`;
        quantitativo.innerText = `0`;
        margem5.innerText = `0`;
        margem10.innerText = `0`;
        larguraAlturas.innerText = " ";
        QuantTijolos.innerText = " "
    }

    if(larguraDimensao === ""){
        resultLH.innerText = `0`;
        quantitativo.innerText = `0`;
        margem5.innerText = `0`;
        margem10.innerText = `0`;
        larguraAlturas.innerText = " ";
        QuantTijolos.innerText = " "
    }

    if(alturaDimensao === ""){
        resultLH.innerText = `0`;
        quantitativo.innerText = `0`;
        margem5.innerText = `0`;
        margem10.innerText = `0`;
        larguraAlturas.innerText = " ";
        QuantTijolos.innerText = " "
    }

    if(isNaN(quantitativo.innerText)){
        resultLH.innerText = `0`;
        quantitativo.innerText = `0`;
        margem5.innerText = `0`;
        margem10.innerText = `0`;
        larguraAlturas.innerText = " ";
        QuantTijolos.innerText = " "
    }
})