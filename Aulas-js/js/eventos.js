function eventoClick(){
   //alert('Acionou um evento de click');
  document.body.style.backgroundColor = "blue";

}

function eventoDblClick(){
    alert('Evento de duplo click');
    document.body.style.backgroundColor = "black"
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append('O mouse moveu<br>');
}