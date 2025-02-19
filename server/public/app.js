const socket = io("ws//localhost:3500");

const nachrichtenInput = document.querySelector(".nachrichten-input");
const namenInput = document.querySelector("#name");
const chatRaum = document.querySelector("#raum");
const aktivitaet = document.querySelector(".aktivitaet");
const teilnehmerListe = document.querySelector(".teilnehmer-liste");
const raumListe = document.querySelector(".raum-liste");
const nachrichtenDisplay = document.querySelector(".nachrichtenDisplay");

function nachrichtSenden(e) {
  e.preventDefault();
  if (namenInput.value && nachrichtenInput.value && chatRaum.value) {
    socket.emit("nachrichten-input", {
      name: namenInput.value,
      text: nachrichtenInput.value,
    });
    nachrichtenInput.value = "";
  }
  nachrichtenInput.focus();
}

function raumBeitreten(e) {
  e.preventDefault();
  if (namenInput.value && chatRaum.value) {
    socket.emit("raumBeitreten", {
      name: namenInput.value,
      raum: chatRaum.value,
    });
  }
}

document
  .querySelector(".nachrichten")
  .addEventListener("submit", nachrichtSenden);

document
  .querySelector(".form-beitreten")
  .addEventListener("submit", raumBeitreten);

nachrichtenInput.addEventListener("keypress", () => {
  socket.emit("aktivitaet", namenInput.value);
});

// AUF NACHRICHTEN LAUSCHEN

socket.on("nachricht", (data) => {
  aktivitaet.textContent = "";
  const { name, text, time } = data;
  const li = document.createElement("li");
  li.className = "post";
  if (name === namenInput.value) li.className = "post post--left";
  if (name !== namenInput.value && name !== "Admin")
    li.className = "post post--right";
  if (name !== "Admin") {
    li.innerHTML = `<div class="post__header ${
      name === namenInput.value
    } ? "post__header--user" : "post__header--reply}">
    <span class="post__header--name">${name}</span>
    <span class="post__header--time">${time}</span>
    </div>
    <div class="post__text">${text}</div>`;
  } else {
    li.innerHTML = `<div class="post__text">${text}</div>`;
  }
  document.querySelector("chat-display").appendChild(li);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
});

let activityTimer;
socket.on("aktivitaet", (name) => {
  aktivitaet.textContent = `${name} schreibt gerade...`;

  // Nach 3 Sekunden löschen
  clearTimeout(activityTimer);
  activityTimer = setTimeout(() => {
    aktivitaet.textContent = "";
  }, 3000);
});

socket.on("teilnehmerListe", ({ teilnehmer }) => {
  teilnehmerAnzeigen(teilnehmer);
});

socket.on("raumListe", ({ roeme }) => roemeAnzeigen(roeme));

function teilnehmerAnzeigen(teilnehmer) {
  teilnehmerListe.textContent = "";
  if (teilnehmer) {
    teilnehmerListe.innerHTML = `<em>Teilnehmer in ${chatRaum.value}:</em>`;
    teilnehmer.forEach((einTeilnehmer, i) => {
      teilnehmerListe.textContent += ` ${einTeilnehmer.name}`;
      if (teilnehmer.length > 1 && i !== teilnehmer.length - 1) {
        teilnehmerListe.textContent += ",";
      }
    });
  }
}

function roemeAnzeigen(roeme) {
  raumListe.textContent = "";
  if (roeme) {
    raumListe.innerHTML = "<em>Aktive Räume:</em>";
    roeme.forEach((raum, i) => {
      raumListe.textContent += ` ${raum}`;
      if (roeme.length > 1 && i !== rooms.length - 1) {
        roomList.textContent += ",";
      }
    });
  }
}
