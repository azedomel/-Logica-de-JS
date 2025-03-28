
//duas formas de fazer um calculo:
//criando variaveis separadas:
let a = 1;
let b = 2;
console.log(a + b);
//ou criando uma função:
const naosei = (c = 1, d = 2) => {
    return c + d;
}
console.log(naosei());


//para pedir o nome do usuário no navegador, usamos o prompt(); e para mostrar o resultado, usamos o alert();
// let nome = prompt("Digite seu nome: ");
// alert(`Olá, ${nome}!`);

//para rodar no node.js, usamos o readline:

//função que habilita o readline, que já é uma função nativa do node.js:
const readline = require('readline');
//o createInterface é uma função que cria uma interface de leitura e escrita:
const rl = readline.createInterface({
    //aqui passamos os objetos de entrada e saída:
    input: process.stdin,
    output: process.stdout
});

//mostrar um número digitado pelo usuário:

rl.question('Digite um número: ', (numero) => {
    console.log(`O número digitado foi: ${numero}`);
    rl.close();
});

// como fazer o resultado da soma na readline:

//definir a função de cálculo e seu retorno:
const soma = (a, b) => {
    return a + b;
}
//pedir os números para o usuário:
rl.question("digite o primeiro número: ", (a) => {
    rl.question("digite o segundo número: ", (b) => {
        //mostrar o resultado do calculo atraves da função soma:
        //o Number serve para converter a string em número, pois o readline retorna por padrão uma string
        console.log(`O resultado da soma é: ${soma(Number(a), Number(b))}`);
        //fechar a interface readline:
        rl.close();
    });
});