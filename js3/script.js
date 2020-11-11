// 225JSnack
// 3Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.(ripassiamo il Teorema di Pitagora ;D )
$('#js3').click( ()=>{


let height = parseInt(prompt(`inserire altezza`));
let baSe = parseInt(prompt(`inserire base`));

const triangolo = [
  {
    'altezza' : height ,
    'base' : baSe
  }
];




triangolo[0]['area'] = triangolo[0]['base'] * triangolo[0]['altezza']
triangolo[0]['ipotenusa'] = Math.sqrt((triangolo[0]['base'] ** 2) + (triangolo[0]['altezza'] ** 2))
triangolo[0]['perimetro'] = triangolo[0]['ipotenusa'] + triangolo[0]['altezza'] + triangolo[0]['base']


  for (let i = 0; i < triangolo.length; i++){
     for (key in triangolo[i]){
       $('#list').append(`${key} = ${triangolo[i][key]} <br>`);
     };
  };
})
