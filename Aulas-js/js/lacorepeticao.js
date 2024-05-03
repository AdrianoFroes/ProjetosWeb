function verificar(){    var nome = document.getElementById("nome").value;

    if(nome == "" || nome == nul){
        let p = document.getElementById("teste");
        p.innerHTML = "o campo nao pode ser valor vazio";
        p.style.color = "red";

    }else{
        let p = document.getElementById("teste");
        p.innerHTML = "Parabens campos preenchido com sucesso";
        p.style.color = "green";
    }

}
