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
