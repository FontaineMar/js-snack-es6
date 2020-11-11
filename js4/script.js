// JSnack 4A
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// JSnack 4B
// Generare numeri random al posto degli 0 nelle proprietà:punti fatti e falli subiti
$('#js4').click( ()=> {

  const teams = [];
  const numRandom = (min , max) =>  Math.floor(Math.random() * ((max + 1) - min));
  for (var i = 0; i < 5; i++){
    input = prompt('inserisci squadra');
    let team ={
      'name' : input ,
      'penality' : numRandom(0 , 10),
      'points' :  numRandom(0 , 10)
    }
    teams.push(team);
  }
  console.log(teams);
  for (var i = 0; i < teams.length; i++){
    for( key in teams[i]){
      $('#list').append(`${key}: ${teams[i][key]} <br>`)
    }
  }
});
