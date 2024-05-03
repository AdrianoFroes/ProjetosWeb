const carro = {
    marca: "TOYOTA",
    modelo: "COROLLA CROSS", 
    ano: 2015, 
    placa: "NJE-0824",

    buzina: function() { alert('BIIIIIIIIIIIII')},
    completo: function(){
        return "A marcar é " + this.marca + " e o modelo é " + this.modelo
    }
};

console.log(carro);
