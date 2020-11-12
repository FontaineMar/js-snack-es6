// JSnack 2
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa
// con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore
// $('#js2up').click( ()=> {
$('#js2Up').click( ()=> {
  const bike = [
    {
      'nome' : 'pinerolo',
      'peso' : 20
    },
    {
      'nome' : 'boatecchia',
      'peso' : 18
    },
    {
      'nome' : 'scott',
      'peso' : 25
    },
    {
      'nome' : 'atala',
      'peso' : 9
    },
    {
      'nome' : 'faram',
      'peso' : 35
    },
    {
      'nome' : 'btwin',
      'peso' : 18
    }
  ];
  // bike.sort(function (a, b){
  //   return a.peso - b.peso
  // });
  // console.log(bike)
  var lightBike = bike[0];
  bike.forEach( (element,i) => {
    if (element.peso <=  lightBike.peso){
      lightBike = element;
      $('#list').text(`${element.nome}: ${element.peso}`);
    }
  });
});
