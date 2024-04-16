// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

//Creo l'array di oggetti per le bici
const biciDaCorsa = [
    {
        nome: "Bianchi Oltre XR4",
        peso: 7.2
    },
    {
        nome: "Specialized S-Works Tarmac",
        peso: 6.8
    },
    {
        nome: "Cannandale Supersix Evo",
        peso: 7.0
    },
    {
        nome: "Trek Madone SLR",
        peso: 7.1
    },
    {
        nome: "Pinarello Dogma",
        peso: 6.5
    }
]

// imposto una variabile di appoggio. Peso iniziale sarà il peso della prima bici nell'array
let biciLeggera = biciDaCorsa[0];

// Creo un ciclo for each
biciDaCorsa.forEach((curBici) => {
    // Se il peso della bici corrente è minore del peso della bici più leggera
    if (curBici.peso < biciLeggera.peso) {
        // sostituisco il valore del peso della bici più leggera
        biciLeggera = curBici;
    }
})

// Destutturo e stampo il nome della bici e il suo peso
const {nome, peso} = biciLeggera;
console.log(`la bici più leggera è ${nome} con peso ${peso}`);