"use strict";

function speichern() {
  let feldWert = document.querySelector(".g-ex1-q1").value;
  let feldWert2 = document.querySelector(".g-ex1-q2").value;
  let feldWert3 = document.querySelector(".g-ex1-q3").value;
  let feldWert4 = document.querySelector(".g-ex1-q4").value;
  localStorage.setItem("g_ex1_q1", feldWert);
  localStorage.setItem("g_ex1_q2", feldWert2);
  localStorage.setItem("g_ex1_q3", feldWert3);
  localStorage.setItem("g_ex1_q4", feldWert4);
}

function holen() {
  let gespeicherterWert = localStorage.getItem("g_ex1_q1");
  let gespeicherterWert2 = localStorage.getItem("g_ex1_q2");
  let gespeicherterWert3 = localStorage.getItem("g_ex1_q3");
  let gespeicherterWert4 = localStorage.getItem("g_ex1_q4");
  if (
    gespeicherterWert &&
    gespeicherterWert2 &&
    gespeicherterWert3 &&
    gespeicherterWert4
  ) {
    document.getElementById("g-ex1-q1").value = gespeicherterWert;
    document.getElementById("g-ex1-q2").value = gespeicherterWert2;
    document.getElementById("g-ex1-q3").value = gespeicherterWert3;
    document.getElementById("g-ex1-q4").value = gespeicherterWert4;
  }
}

// localStorage.setItem("g-ex1-q1", document.querySelector(".g-ex1-q1").value);
