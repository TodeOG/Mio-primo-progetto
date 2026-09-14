let nome = "Mario";
let eta=25;
let studente= true;
console.log(nome);
console.log(eta);
console.log(studente);
function saluta(nome) {
    console.log("Ciao" + nome + "!");
}
saluta("Mario");
saluta("Anna");
saluta("Luca");
function somma(a, b) {
    console.log(a + b);
}
somma(5, 3); // dovrebbe stampare 8
let eta2 = 20
if (eta2 >= 18) {
    console.log("Sei maggiorenne");
} else {
    console.log("Sei minorenne")
}
let voto = 75;
if (voto >= 90){
    console.log("Ottimo");
} else if (voto<= 60) {
    console.log("Sufficiente");
} else {
    console.log("Insufficiente");
}
function controllaVoto(voto) {
    if (voto >=60) {
    console.log("Promosso");
    } else if (voto <60){
        console.log("Bocciato")
    }
}
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let frutti = ["mela", "banana", "kiwi"];
for (let i = 0; i < frutti.length; i++) {
  console.log(frutti[i]);
}
function stampaQuadrati() {
    for (let i = 1; i <= 5; i++) {
        console.log(i * i);
    }
}

stampaQuadrati();
let titolo = document.querySelector("h1");
console.log(titolo);
titolo.textContent = "Titolo cambiato da JS!";
titolo.style.color = "orange";

let bottone = document.querySelector("button");
bottone.addEventListener("click", function() {
    console.log("Hai cliccato il bottone!");
    titolo.textContent = "Hai cliccato!";
});
let contatore = 0;
let numeroClick = document.querySelector("#numero-click");
let btnContatore = document.querySelector("#btn-contatore");

btnContatore.addEventListener("click", function() {
  contatore = contatore + 1;
  numeroClick.textContent = contatore;
});
let btnReset = document.querySelector("#btn-reset");

btnReset.addEventListener("click", function() {
  contatore = 0;
  numeroClick.textContent = contatore;
});