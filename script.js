// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

const bicicletta = [
    {
        nome :  "Gian tcr advanced",
        peso : 6.4
    },
    {
        nome : "Specialized S-Works Tarmac ",
        peso : 6.6
    },
    {
        nome : "Bianchi Specialissima RC",
        peso : 6.7
    },
    {
        nome : "BMC TeamMachine SLR 01",
        peso : 6.9
    },
    {
        nome : "Scott Foil RC Ultimate",
        peso : 7.2
    }
]
 let biciPeso = bicicletta[0];

for (let i = 1; i < bicicletta.length; i++){
   if (bicicletta[i].peso > biciPeso.peso ){
    
    biciPeso = bicicletta[i];
   }

}

console.log(biciPeso.peso)

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

