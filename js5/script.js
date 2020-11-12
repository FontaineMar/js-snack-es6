// jsnack 5
// Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa
// tra i due numeri inseriti dall’utente

$('#js5').click( ()=> {
  const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
  let inputMin = parseInt(prompt(`inserire un numero minimo`));
  let inputMax = parseInt(prompt(`inserire un numero massimo`));
  let newArray = myArray.filter((element, i) =>{
    if (i >= inputMin && i <= inputMax) {
      return true;
    } else return false;
  });
  $('#list').append(`${newArray}`);
});
