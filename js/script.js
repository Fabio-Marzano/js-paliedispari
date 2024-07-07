//PALINDROMA//

//CONSENTIAMO L'INSERIMENTO DELLA PAROLA DA PARTE DELL'UTENTE//
let word = prompt('Inserisci la parola'); 
//PRENDO LA PAROLA INSERITA DALL'UTENTE LA SUDDIVIDO E NE INVERTO L'ORDINE//
let check_pal = word.split('').reverse().join('');

function countWords (string){

    for( let i = 0; i < string.length; i++){

        if(word == check_pal){
            console.log('La stringa e palindroma') //CONTROLLO SE LA PAROLA INSERITA E' PALINDROMA
        }else {
            console.log('La stringa non e palindroma')  //SE LA PAROLA INSERITA NON E PALINDROMA
            return'la stronga non e palindroma'  //ESCO DAlLA FUNZIONE QUANDO RILEVATO IL FATTO
        }
        
        
             
    }
    return('La stringa non e palindroma');
    
    
}

let wordpal = countWords(word);

//PARI E DISPARI//

//ASSEGNO FUNZIONE CHE GENERA IL NUMERO RANDOM//
function generateRandomNumber() {

    return Math.floor(Math.random() * 5);
}
