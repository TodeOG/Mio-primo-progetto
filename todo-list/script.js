let input = document.querySelector("#input-attivita");
let btnAggiungi = document.querySelector("#btn-aggiungi");
let lista = document.querySelector("#lista-attivita");
let bottoniFiltro = document.querySelectorAll(".btn-filtro");

let attivita = JSON.parse(localStorage.getItem("attivita")) || [];
let filtroAttuale = "tutte";

function salva() {
  localStorage.setItem("attivita", JSON.stringify(attivita));
}

function disegna() {
  lista.innerHTML = "";

  for (let i = 0; i < attivita.length; i++) {
    let elemento = attivita[i];

    if (filtroAttuale === "attive" && elemento.completata) {
      continue;
    }
    if (filtroAttuale === "completate" && !elemento.completata) {
      continue;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = elemento.testo;
    if (elemento.completata) {
      span.classList.add("completata");
    }

    let btnElimina = document.createElement("button");
    btnElimina.textContent = "Elimina";

    li.appendChild(span);
    li.appendChild(btnElimina);
    lista.appendChild(li);

    span.addEventListener("click", function() {
      elemento.completata = !elemento.completata;
      salva();
      disegna();
    });

    btnElimina.addEventListener("click", function() {
      attivita.splice(i, 1);
      salva();
      disegna();
    });
  }
}

btnAggiungi.addEventListener("click", function() {
  let testo = input.value;

  if (testo === "") {
    return;
  }

  attivita.push({ testo: testo, completata: false });
  input.value = "";

  salva();
  disegna();
});

bottoniFiltro.forEach(function(bottone) {
  bottone.addEventListener("click", function() {
    filtroAttuale = bottone.dataset.filtro;
    disegna();
  });
});

disegna();