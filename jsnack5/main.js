// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente
var numero_utente = prompt("inserisci un numero");
for (var i = 0; i <= numero_utente; i++) {
    console.log(Math.pow(i, 3));
}
