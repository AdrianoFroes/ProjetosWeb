var agora = new Date();
var diaSem = agora.getDay();

console.log(diaSem);

switch (diaSem) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("segunda");
    break;
  case 2:
    console.log("quarta");
    break;
  case 3:
    console.log("quinta");
    break;
  case 4:
    console.log('sexta');
    break;
  case 5:
    console.log("domingo");
    break;
  case 6:
    console.log("sabado");
    break;
}
