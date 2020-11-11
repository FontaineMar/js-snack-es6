// JSnack 1A
// Creare un oggetto palla che abbia le seguenti proprietà Nome = palla, Peso = 10
$('#js1').click( ()=> {

const obj = {
  'nome' : 'palla',
  'peso' : 10
};
console.log(obj);

// Snack 1B
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

obj.peso = parseInt(prompt('inserire un  nuovo peso'));

$('#list').prepend(`${obj.nome} ${obj.peso}`);
});
