let palabras = ['Hola', 'Mundo', 'JavaScript', 'Web'];
let resultado1 = palabras.every(function(palabra) {
  return palabra.length > 3;
});
console.log(resultado1);
