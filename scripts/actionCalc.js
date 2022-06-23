// VERSÃO 01

let buttonCalc = document.getElementById('calcular')


buttonCalc.addEventListener('click', calcularColheita)

function calcularColheita(){

let tch = document.getElementById('tch')
let espacamento = document.getElementById('espacamento')
let tiroMedio = document.getElementById('tiroMedio')
let velocidadeColheita = document.getElementById('velocidadeColheita')
let horasCorte = document.getElementById('horasCorte')
let tempoManobra = document.getElementById('tempoManobra')
let nColhedoras = document.getElementById('nColhedoras')


// CALC

let metrosLineares = Number(10000 / espacamento.value.replace(',','.')).toFixed(2)

let producaoMetros = Number(tch.value.replace(',','.') / metrosLineares).toFixed(4)

let tempoTiroMedio = Number(tiroMedio.value.replace(',','.') * 60 / (velocidadeColheita.value.replace(',','.') * 1000)).toFixed(2)


let tpManobra = Number(tempoManobra.value.replace(',','.')).toFixed(2)

let tempoCiclo = Number(tpManobra) + Number(tempoTiroMedio)

let quantidadeTiros = Number(60 / tempoCiclo)

let metrosHora = Number(Number(quantidadeTiros) * Number(tiroMedio.value.replace(',','.'))).toFixed(2)

let prodTonHora = Number(Number(metrosHora) * Number(producaoMetros)).toFixed(2)

let prodPorMaq = Number(Number(prodTonHora) * Number(horasCorte.value.replace(',','.'))).toFixed(1)

let prodFrente = Number(Number(prodPorMaq) * Number(nColhedoras.value.replace(',','.'))).toFixed(2)

let boxResult = document.getElementById('resultados')

console.log(1000 / espacamento.value.replace(',','.'))

boxResult.innerText = ` 

TCH: ${tch.value}
ESPALAMENTO: ${espacamento.value.replace('.',',')}
TIRO MÉDIO: ${tiroMedio.value}
VELOCIDADE COLHEITA: ${velocidadeColheita.value.replace('.',',')}
HORAS CORTE: ${horasCorte.value.replace('.',',')}
TEMPO MANOBRA: ${tempoManobra.value.replace('.',',')}
Nº COLHEDORAS: ${nColhedoras.value.replace('.',',')}


METROS LINEARES: ${metrosLineares} m
PRODUÇÃO METROS LINEARES: ${producaoMetros} ton/m

TEMPO POR TIRO MÉDIO: ${tempoTiroMedio} min
TEMPO DE MANOBRA: ${tpManobra} min
TEMPO CICLO: ${tempoCiclo} min


QUANTIDADE DE TIROS: ${Number(60 / tempoCiclo).toFixed(1)} tiro/hr
METROS POR HORA: ${metrosHora} mts


PRODUÇÃO TON HORA: ${prodTonHora} ton/hr
PRODUÇÃO POR MÁQUINA: ${prodPorMaq} ton/maq dia

========

PRODUÇÃO FRENTE: ${prodFrente} ton/dia

`

}