//PALINDROMA//

//CONSENTIAMO L'INSERIMENTO DELLA PAROLA DA PARTE DELL'UTENTE//
//let word = prompt('Inserisci la parola'); 
//PRENDO LA PAROLA INSERITA DALL'UTENTE LA SUDDIVIDO E NE INVERTO L'ORDINE//
//let check_pal = word.split('').reverse().join('');

//function countWords (string){

   // for( let i = 0; i < string.length; i++){

        //if(word == check_pal){
           // console.log('La stringa e palindroma') //CONTROLLO SE LA PAROLA INSERITA E' PALINDROMA
       // }else {
          //  console.log('La stringa non e palindroma')  //SE LA PAROLA INSERITA NON E PALINDROMA
           // return'la stronga non e palindroma'  //ESCO DAlLA FUNZIONE QUANDO RILEVATO IL FATTO
        //}
        
        
             
   // }
   // return('La stringa non e palindroma');
    
    
//}

//let wordpal = countWords(word);

//PARI E DISPARI//

//ASSEGNO FUNZIONE CHE GENERA IL NUMERO RANDOM//
function generateRandomNumber() {

    return Math.floor(Math.random() * 5 + 1);
}

//ASSEGNO LA FUNZIONE PER VERIFICARE SE LA SOMMA E' PARI O DISPARI//
function checkEvenOrOdd() {
    //CONTROLLO SE LA SOMMA E' PARI O DISPARI. SE PARI RESTITUISCO STRINGA PARI, SE DISPARI RESTITUISCO STRINGA DISPARI//
    if (sum % 2 === 0) {
        return 'pari';
    }

    return 'dispari';
}

    //DICHIARO LA VARIABILE CON IL PROMPT//
    let even_or_odd = prompt('Inserisci la parola "pari" o "dispari"');

    let number = prompt('Inserisci un valore compreso tra 1 e 5');

    let pc_number = generateRandomNumber();

    let sum = number + pc_number;