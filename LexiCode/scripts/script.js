"use strict";

// document.querySelector(".submit").addEventListener("click", () => {
//   let q1 = document.querySelector(".q1").value;
//   let q2 = document.querySelector(".q2").value;
//   let q3 = document.querySelector(".q3").value;
//   let q4 = document.querySelector(".q4").value;
//   let q5 = document.querySelector(".q5").value;

//   if (
//     q1 === "Guten Morgen" &&
//     q2 === "Tschüss" &&
//     q3 === "Freut mich" &&
//     q4 === "Bitte" &&
//     q5 === "Woher"
//   ) {
//     // alert("Richtig!");
//     document.querySelector(".q1").style.backgroundColor = "#94d82d";
//     document.querySelector(".q1").style.color = "#fff";
//     document.querySelector(".q2").style.backgroundColor = "#94d82d";
//     document.querySelector(".q2").style.color = "#fff";
//     document.querySelector(".q3").style.backgroundColor = "#94d82d";
//     document.querySelector(".q3").style.color = "#fff";
//     document.querySelector(".q4").style.backgroundColor = "#94d82d";
//     document.querySelector(".q4").style.color = "#fff";
//     document.querySelector(".q5").style.backgroundColor = "#94d82d";
//     document.querySelector(".q5").style.color = "#fff";
//   } else if (
//     q1 !== "Guten Morgen" &&
//     q2 === "Tschüss" &&
//     q3 === "Freut mich" &&
//     q4 === "Bitte" &&
//     q5 === "Woher"
//   ) {
//     document.querySelector(".q1").style.backgroundColor = "#e03131";
//     document.querySelector(".q1").style.color = "#fff";
//     document.querySelector(".q2").style.backgroundColor = "#94d82d";
//     document.querySelector(".q2").style.color = "#fff";
//     document.querySelector(".q3").style.backgroundColor = "#94d82d";
//     document.querySelector(".q3").style.color = "#fff";
//     document.querySelector(".q4").style.backgroundColor = "#94d82d";
//     document.querySelector(".q4").style.color = "#fff";
//     document.querySelector(".q5").style.backgroundColor = "#94d82d";
//     document.querySelector(".q5").style.color = "#fff";
//   } else if (
//     q1 === "Guten Morgen" &&
//     q2 !== "Tschüss" &&
//     q3 === "Freut mich" &&
//     q4 === "Bitte" &&
//     q5 === "Woher"
//   ) {
//     document.querySelector(".q1").style.backgroundColor = "#94d82d";
//     document.querySelector(".q1").style.color = "#fff";
//     document.querySelector(".q2").style.backgroundColor = "#e03131";
//     document.querySelector(".q2").style.color = "#fff";
//     document.querySelector(".q3").style.backgroundColor = "#94d82d";
//     document.querySelector(".q3").style.color = "#fff";
//     document.querySelector(".q4").style.backgroundColor = "#94d82d";
//     document.querySelector(".q4").style.color = "#fff";
//     document.querySelector(".q5").style.backgroundColor = "#94d82d";
//     document.querySelector(".q5").style.color = "#fff";
//   } else if (
//     q1 === "Guten Morgen" &&
//     q2 === "Tschüss" &&
//     q3 !== "Freut mich" &&
//     q4 === "Bitte" &&
//     q5 === "Woher"
//   ) {
//     document.querySelector(".q1").style.backgroundColor = "#94d82d";
//     document.querySelector(".q1").style.color = "#fff";
//     document.querySelector(".q2").style.backgroundColor = "#94d82d";
//     document.querySelector(".q2").style.color = "#fff";
//     document.querySelector(".q3").style.backgroundColor = "#e03131";
//     document.querySelector(".q3").style.color = "#fff";
//     document.querySelector(".q4").style.backgroundColor = "#94d82d";
//     document.querySelector(".q4").style.color = "#fff";
//     document.querySelector(".q5").style.backgroundColor = "#94d82d";
//     document.querySelector(".q5").style.color = "#fff";
//   } else if (
//     q1 === "Guten Morgen" &&
//     q2 === "Tschüss" &&
//     q3 === "Freut mich" &&
//     q4 === "Bitte" &&
//     q5 === "Woher"
//   ) {
//     document.querySelector(".q1").style.backgroundColor = "#94d82d";
//     document.querySelector(".q1").style.color = "#fff";
//     document.querySelector(".q2").style.backgroundColor = "#94d82d";
//     document.querySelector(".q2").style.color = "#fff";
//     document.querySelector(".q3").style.backgroundColor = "#e03131";
//     document.querySelector(".q3").style.color = "#fff";
//     document.querySelector(".q4").style.backgroundColor = "#94d82d";
//     document.querySelector(".q4").style.color = "#fff";
//     document.querySelector(".q5").style.backgroundColor = "#94d82d";
//     document.querySelector(".q5").style.color = "#fff";
//   }
// });

// ++++++++++++ ÜBUNG 1: Lückentext ++++++++++++++++++++

document.querySelector(".check-ex1q1").addEventListener("click", () => {
  let ex1q1 = document.querySelector(".ex1q1").value;

  if (ex1q1 === "Guten Morgen") {
    document.querySelector(".ex1q1").style.backgroundColor = "#94d82d";
    document.querySelector(".exq1").style.color = "#fff";
  } else {
    document.querySelector(".ex1q1").style.backgroundColor = "#e03131";
    document.querySelector(".ex1q1").style.color = "#fff";
  }
});

document.querySelector(".check-ex1q2").addEventListener("click", () => {
  let ex1q1 = document.querySelector(".ex1q2").value;

  if (ex1q1 === "Tschüss") {
    document.querySelector(".ex1q2").style.backgroundColor = "#94d82d";
    document.querySelector(".ex1q2").style.color = "#fff";
  } else {
    document.querySelector(".ex1q2").style.backgroundColor = "#e03131";
    document.querySelector(".ex1q2").style.color = "#fff";
  }
});

document.querySelector(".check-ex1q3").addEventListener("click", () => {
  let ex1q1 = document.querySelector(".ex1q3").value;

  if (ex1q1 === "Freut mich") {
    document.querySelector(".ex1q3").style.backgroundColor = "#94d82d";
    document.querySelector(".ex1q3").style.color = "#fff";
  } else {
    document.querySelector(".ex1q3").style.backgroundColor = "#e03131";
    document.querySelector(".ex1q3").style.color = "#fff";
  }
});

document.querySelector(".check-ex1q4").addEventListener("click", () => {
  let ex1q1 = document.querySelector(".ex1q4").value;

  if (ex1q1 === "Entschuldigung") {
    document.querySelector(".ex1q4").style.backgroundColor = "#94d82d";
    document.querySelector(".ex1q4").style.color = "#fff";
  } else {
    document.querySelector(".ex1q4").style.backgroundColor = "#e03131";
    document.querySelector(".ex1q4").style.color = "#fff";
  }
});

document.querySelector(".check-ex1q5").addEventListener("click", () => {
  let ex1q1 = document.querySelector(".ex1q5").value;

  if (ex1q1 === "Woher") {
    document.querySelector(".ex1q5").style.backgroundColor = "#94d82d";
    document.querySelector(".ex1q5").style.color = "#fff";
  } else {
    document.querySelector(".ex1q5").style.backgroundColor = "#e03131";
    document.querySelector(".ex1q5").style.color = "#fff";
  }
});

// ++++++++++++ ÜBUNG 2: ÜBERSETZUNG  ++++++++++++++++++++

document.querySelector(".check-ex2q1").addEventListener("click", () => {
  let ex2q1 = document.querySelector(".ex2q1").value;

  if (ex2q1 === "Guten Abend!") {
    document.querySelector(".ex2q1").style.backgroundColor = "#94d82d";
    document.querySelector(".ex2q1").style.color = "#fff";
  } else {
    document.querySelector(".ex2q1").style.backgroundColor = "#e03131";
    document.querySelector(".ex2q1").style.color = "#fff";
  }
});

document.querySelector(".check-ex2q2").addEventListener("click", () => {
  let ex2q2 = document.querySelector(".ex2q2").value;

  if (ex2q2 === "Ich bin 20 Jahre alt.") {
    document.querySelector(".ex2q2").style.backgroundColor = "#94d82d";
    document.querySelector(".ex2q2").style.color = "#fff";
  } else {
    document.querySelector(".ex2q2").style.backgroundColor = "#e03131";
    document.querySelector(".ex2q2").style.color = "#fff";
  }
});

document.querySelector(".check-ex2q3").addEventListener("click", () => {
  let ex2q2 = document.querySelector(".ex2q3").value;

  if (ex2q2 === "Woher kommst du?") {
    document.querySelector(".ex2q3").style.backgroundColor = "#94d82d";
    document.querySelector(".ex2q3").style.color = "#fff";
  } else {
    document.querySelector(".ex2q3").style.backgroundColor = "#e03131";
    document.querySelector(".ex2q3").style.color = "#fff";
  }
});

document.querySelector(".check-ex2q4").addEventListener("click", () => {
  let ex2q2 = document.querySelector(".ex2q4").value;

  if (ex2q2 === "Freut mich, dich kennenzulernen.") {
    document.querySelector(".ex2q4").style.backgroundColor = "#94d82d";
    document.querySelector(".ex2q4").style.color = "#fff";
  } else {
    document.querySelector(".ex2q4").style.backgroundColor = "#e03131";
    document.querySelector(".ex2q4").style.color = "#fff";
  }
});

document.querySelector(".check-ex2q5").addEventListener("click", () => {
  let ex2q2 = document.querySelector(".ex2q5").value;

  if (ex2q2 === "Danke!") {
    document.querySelector(".ex2q5").style.backgroundColor = "#94d82d";
    document.querySelector(".ex2q5").style.color = "#fff";
  } else {
    document.querySelector(".ex2q5").style.backgroundColor = "#e03131";
    document.querySelector(".ex2q5").style.color = "#fff";
  }
});

// ABSCHLUSSTEST

document.querySelector("#submit-t1").addEventListener("click", () => {
  let ft1_qa = document.querySelector(".ft1-qa").value;
  let ft1_qb = document.querySelector(".ft1-qb").value;
  let ft1_qc = document.querySelector(".ft1-qc").value;
  let ft1_qd = document.querySelector(".ft1-qd").value;
  let ft1_qe = document.querySelector(".ft1-qe").value;

  if (ft1_qa === "Mein Name ist Anna") {
    document.querySelector(".ft1-qa").style.backgroundColor = "#94d82d";
    alert("Richtig");
  } else {
    alert("Wrong");
  }
});
