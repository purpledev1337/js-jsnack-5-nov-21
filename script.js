// Jsnack #1:
// -------------------------
// Creare un array di 7 oggetti:
// Ogni oggetto descriverà una bici  con le seguenti proprietà:
// nome, peso e brand.
const bikesCatalog = [
    
    {
        "Name":"MTB special 2022",
        "Weight":"12 Kg",
        "Brand":"Decathlon"
    },
    {
        "Name":"MTB AmazonBrand 2021",
        "Weight":"10 Kg",
        "Brand":"Amazon"
    },
    {
        "Name":"MTB super special 2020",
        "Weight":"11 Kg",
        "Brand":"Mediaworld"
    },
    {
        "Name":"MTB special 2022",
        "Weight":"13 Kg",
        "Brand":"Ebay"
    },
    {
        "Name":"MTB normal 2021",
        "Weight":"14 Kg",
        "Brand":"Decathlon"
    },
    {
        "Name":"MTB special 2019",
        "Weight":"13 Kg",
        "Brand":"Apple"
    },
    {
        "Name":"MTB special 2022",
        "Weight":"12 Kg",
        "Brand":"Amazon"
    }
    
];

// log in console dell’oggetto
console.log("Il catalogo biciclette era: ", bikesCatalog);

// Jsnack #2:
// -------------------------

// Creare un nuovo oggetto,
const newBike =     {
    "Name":"MTB extreme 2023",
    "Weight":"10 Kg",
    "Brand":"Wallmart"
}


// crearne una copia con la proprietà “numeroMarce” aggiunta
let copiedBike = {...newBike, "Gears" : 27};


// pushare il nuovo oggetto copia nell’array di oggetti
bikesCatalog.push(copiedBike);

// log in console dell’oggetto originale + log in console dell’oggeto copia
// log in console dell’array di oggetti
console.log("Il nuovo oggetto copiato è: ", newBike);
console.log("La copia del nuovo oggetto è: ", copiedBike);
console.log("Il catalogo aggiornato è: ", bikesCatalog);

// Jsnack #3:
// -------------------------
// stampare a schermo l’elenco delle bici con tutte le info, principali (numero delle marce no);
// [html super base senza o con css super grezzo, l’importante che si capisca dove finisce un blocco bc e dove inizia l’altro, solo quello (quindi bastan dei margini grossolani)]

const selCatalog = document.querySelector(".catalog");

for (let i = 0; i < bikesCatalog.length; i++) {
    let bikeName = bikesCatalog[i].Name;
    let bikeWeight = bikesCatalog[i].Weight;
    let bikeBrand = bikesCatalog[i].Brand;

    selCatalog.innerHTML += `<ul class="bike-specs">
                                <li class="bike-name">${bikeName}</li>
                                <li class="bike-weight">${bikeWeight}</li>
                                <li class="bike-brand">${bikeBrand}</li>
                            </ul>`
};