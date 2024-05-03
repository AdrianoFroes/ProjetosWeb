function soma(valor1, valor2){
    return valor1 + valor2;

}
document.getElementById("texto").innerHTML = soma(10,10);

function realParaDolar(real, contacaoDolar){
    return real * contacaoDolar
}

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal,cotacao);

alert("O valor em real é R$ " + valorReal + " o valor em dolar U$ é: " + total);

function alertaHello(){
    alert("Ola Pessoal");
}

function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);

}

var x = paraCelsius(77);

alert("A temperatura é de " + x + " graus Celsius ");