let título = document.querySelector('h1');
título.innerHTML = 'Hora do Desafio';

function verificarConsole() {
    console.log ('O botão foi clicado');
}

function verificarAlert() {
    alert('Eu amo JS');
}
let cidade;

function verificarPrompt() {
    cidade = prompt('Me fale uma cidade do Brasil');
    alert(`Fui a ${cidade} e lembrei de você`);
}
let número2;
let número1;
let resultado;
function verificarSoma() {
   número1 = prompt('Me fale um número inteiro');
   número2 = prompt('Me fale outro número inteiro');
   resultado = número2 + número1;
    alert(`A soma dos números é ${resultado}`);
}

function saudação() {
    console.log('Olá, Mundo');
}
saudação();
function cumprimento(nome) {
    console.log(`Olá ${nome}`);
}
cumprimento('João');

function dobrar(numero) {
    return numero * 2;
}
let resultadoDobro = dobrar(2);
console.log(resultadoDobro); 
function media(a,b,c) {
return (a+b+c)/3;
}
let resultMedia = media(3,10,6);
console.log(resultMedia)
function comparar(a,b) {
    return a>b?a:b;   
}
let maiorNumero = comparar(3,1)
console.log(maiorNumero);
function quadrado(x) {
    return x*x;
}
let resultadoQuadrado = quadrado(8);
console.log(resultadoQuadrado)

function calcularImc(altura, peso){
    return peso/quadrado(altura) 
}
let resultadoImc = calcularImc(1.80 , 90);
console.log(resultadoImc);
function calcularFatorial (numeroExemplo){
    while (numeroExemplo!=0){
       numeroExemplo1 = numeroExemplo--;
        let resultadoFatorial = numeroExemplo * numeroExemplo1;
        let result = resultadoFatorial * numeroExemplo1
    } if (numeroExemplo <=0){
        stop 
    }
}
let result3 = calcularFatorial(4);
console.log(result3);