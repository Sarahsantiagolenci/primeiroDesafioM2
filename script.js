let dia= "s"
if(dia === "s") {
    console.log("claro")
} else {
    console.log("de noite")
}


for (let contador = 0; contador <= 20; contador += 2) {
    console.log(contador)
}


function mensagem(frase) {
    console.log(`a mensagem é ${frase}`);
}
mensagem("sorria, você está sendo filmado");


function conhecer(nome) {
    console.log(`meu nome é ${nome}`);
}
conhecer("Sarah");


function apresentar(nome, idade, estilo) {
    console.log(`meu nome: ${nome}, idade: ${idade}, estilo musical: ${estilo}`);
}
apresentar("Sarah", "27 anos", "música internacional");


function timeOff(filme, musica) {
    console.log(`um filme ${filme}, uma música ${musica}`);
}
timeOff("titanic", "dogDaysAreOver");


function numeroTriplo(numero) {
    let resultado = numero * 3;
    return resultado; 
}
numeroTriplo(7);


function verificadoraBool(variavel) {
    if(variavel === true) {
        console.log("true")
    } else {
        console.log("false")
    }
}
let noite = true 
dia = false 
verificadoraBool(noite);
verificadoraBool(dia);


let casa = ["panela", "prato", "mesa", "tapete", "banco"];
console.log(casa);

casa.unshift("colher");

casa.pop();

casa.push("cadeira", "máquina");

casa.shift();


let numbers = [7,5,6,3,8,9,2,1,4];
console.log (numbers.sort (function (a, b) {return a - b}));


let mim = {
    nascida: "Bauru, interior de São Paulo",
    cresceu: "Botucatu, também interior",
    formou: "Minas Gerais"
}

mim.gostaDe = "viajar";

delete mim.formou;

console.log(mim);


let cadastro = [
    {
        nome: "Julia",
        idade: 20,
        telefone: 963852741,
        amigos: "Barnabé, Bernardo, Beto, Bruno"
    },
    {
        nome: "Joaquina",
        idade: 50,
        telefone: 936825714,
        amigos: "Silvio, Tereza, Amaro, Maria"
    },
    {
        nome: "Adriano",
        idade: 55,
        telefone: 951753842,
        amigos: "Margarida, Jessica, Miguel, Helena"
    },
    {
        nome: "Bruna", 
        idade: 25,
        telefone: 987654321,
        amigos: "João, André, Silvana, Rosalina"
    },
    {
        nome: "Mário",
        idade: 47,
        telefone: 978645312,
        amigos: "Clarice, Valentim, Liz, Samira"
    },
];

console.log(cadastro[0].amigos.split(`, `)[3]);

console.log(cadastro[1].amigos.split(`, `)[2]);

console.log(cadastro[2].amigos.split(`, `)[1]);

console.log(cadastro[3].amigos.split(`, `)[0]);

console.log(cadastro[4].amigos.split(`, `)[2]);




