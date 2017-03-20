var arregloFrutas = [];
var frutas;
var frutasAgregadas;

function agregarFrutas() {
  frutas = document.getElementById("frutasIntroducidas").value;
  frutasAgregadas = arregloFrutas.push(frutas);
  return frutasAgregadas.value = boton;

  console.log(frutas);
  console.log(frutasAgregadas);


}
console.log(arregloFrutas);
console.log(agregarFrutas);
  /*
  1. que el boton agrege el texto al arregloFrutas
  2. que el arreglo de frutas se llene según las frutas agregadas
  3. Imprimir frutas agregadas a la lista
*/
