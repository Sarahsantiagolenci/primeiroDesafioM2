let dia= "s"
if(tempo == "s") {
    console.log("claro")
} else {
    console.log("de noite")
}


for (let contador =0; contador <20; contador +=2) {
    console.log (contador)
}


function mensagem (frase) {
    console.log (`a mensagem é ${frase}`);
}
mensagem ("sorria, você está sendo filmado");


function conhecer (nome) {
    console.log (`meu nome é ${nome}`);
}
conhecer ("Sarah");


function apresentar (nome, idade, estilo) {
    console.log (`meu nome, idade, estilo musical é ${nome, idade, estilo}`);
}
apresentar ("Sarah", "27 anos", "música internacional");


function timeOff (filme, música) {
    console.log (`um filme, uma música ${filme, música}`);
}
timeOff ("titanic", "dogDaysAreOver");


7.


function 


let casa = ["panela", "prato", "mesa", "tapete", "banco"];
console.log (cozinha);

casa.unshift ("colher");

casa.pop ();

casa.push ("cadeira", "máquina");

casa.shift ();


let numbers = [7,5,6,3,8,9,2,1,4];
console.log (numeros.sort (function (a, b) {return a - b}));


let mim = {
    nascida: "Bauru, interior de São Paulo"
    cresceu: "Botucatu, também interior"
    formou: "Minas Gerais"
}

mim.gostaDe = "viajar";

delete mim.formou;

console.log(mim);


let cadastro = [
    {
        nome: "Julia"
        idade: 20
        telefone: 963 852 741
        amigos: "Barnabé, Bernardo, Beto, Bruno"
    },
    {
        nome: "Joaquina"
        idade: 50
        telefone: 936 825 714
        amigos: "Silvio, Tereza, Amaro, Maria"
    },
    {
        nome: "Adriano"
        idade: 55
        telefone: 951 753 842
        amigos: "Margarida, Jessica, Miguel, Helena"
    },
    {
        nome: "Bruna" 
        idade: 25
        telefone: 987 654 321
        amigos: "João, André, Silvana, Rosalina"
    },
    {
        nome: "Mário"
        idade: 47
        telefone: 978 645 312
        amigos: "Clarice, Valentim, Liz, Samira"
    },
];

console.log (cadastro[1].amigos);
e o restante?



