
var item1 = "arroz";
var item2 = "fejao";
var item3 = "macarrao";
var item4 = "trigo";


//const pessoa = ["adriano","froes",30,]; //array
//pessoa.push("programador softplan");

//alert(pessoa[pessoa.length -1]);

//document.getElementById("teste").innerHTML = pessoa.join("--")

const numeros = [40,100,1,5,25,10];
const maior20 = numeros.filter(filtragem);

document.getElementById("teste").innerHTML = maior20;

function filtragem(value, index, array){
    return value > 20;
}