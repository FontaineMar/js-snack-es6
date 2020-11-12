// jsnack 6
// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi
// (quindi ogni oggetto del nuovo array) una nuova proprietà position che contiene
 // una lettera casuale. non dobbiamo modificare l’array iniziale

$('#js6').click( ()=> {
  function generateRandomString(iLen) {
    var sRnd = '';
    var sChrs = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    for (var i = 0; i < iLen; i++) {
      var randomPoz = Math.floor(Math.random() * sChrs.length);
      sRnd += sChrs.substring(randomPoz, randomPoz + 1);
    }
    return sRnd;
  }
  const arrayObj = [
    {name: 'Poppy', type: 'tshirt', color: 'red'},
    {name: 'Jumping', type: 'occhiali', color: 'blue'},
    {name: 'CrissCross', type: 'scarpe', color: 'black'},
    {name: 'Jenny', type: 'borsa', color: 'pink'},
  ];
  const newArrayObj = arrayObj.map( element => {
    var myMapp =
    {
      name : element.name,
      type : element.type,
      color : element.color,
      position : generateRandomString(1)
    }
    return myMapp
  });
  newArrayObj.forEach(element => {
    $('#list').append(`${element.name} ${element.type} ${element.color} ${element.position} <br>`);
  });
});
