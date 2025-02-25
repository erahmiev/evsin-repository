document.querySelector("#submit-t1").addEventListener("click", () => {
  let ft1_qa = document.querySelector(".ft1-qa").value;
  let ft1_qb = document.querySelector(".ft1-qb").value;
  let ft1_qc = document.querySelector(".ft1-qc").value;
  let ft1_qd = document.querySelector(".ft1-qd").value;
  let ft1_qe = document.querySelector(".ft1-qe").value;
  let ft_sf_1 = document.querySelector("#ft1-score-field-1").value;

  if (
    ft1_qa === "Mein Name ist Anna." &&
    ft1_qb === "Ich bin 25 Jahre alt." &&
    ft1_qc === "Wo kommst du her?" &&
    ft1_qd === "Wie alt bist du?" &&
    ft1_qe === "Tschüss und gute Nacht."
  ) {
    document.querySelector(".ft1-qa").style.backgroundColor = "#94d82d";
    document.querySelector(".ft1-qb").style.backgroundColor = "#94d82d";
    document.querySelector(".ft1-qc").style.backgroundColor = "#94d82d";
    document.querySelector(".ft1-qd").style.backgroundColor = "#94d82d";
    document.querySelector(".ft1-qe").style.backgroundColor = "#94d82d";
    document.querySelector("#ft1-score-field-1").value = "5 Punkte";
  } else {
    alert("Wrong");
  }
});

document.querySelector("#submit-t2").addEventListener("click", () => {
  let ft2_qa = document.querySelector(".ft2-qa").value;
  let ft2_qb = document.querySelector(".ft2-qb").value;
  let ft2_qc = document.querySelector(".ft2-qc").value;
  let ft2_qd = document.querySelector(".ft2-qd").value;
  let ft2_qe = document.querySelector(".ft2-qe").value;

  if (
    ft2_qa === "Guten" &&
    ft2_qb === "bin" &&
    ft2_qc === "ist" &&
    ft2_qd === "Wie" &&
    ft2_qe === "Bitte"
  ) {
    document.querySelector(".ft2-qa").style.backgroundColor = "#94d82d";
    document.querySelector(".ft2-qb").style.backgroundColor = "#94d82d";
    document.querySelector(".ft2-qc").style.backgroundColor = "#94d82d";
    document.querySelector(".ft2-qd").style.backgroundColor = "#94d82d";
    document.querySelector(".ft2-qe").style.backgroundColor = "#94d82d";
    document.querySelector("#ft1-score-field-2").value = "5 Punkte";
  } else {
    alert("Wrong");
  }
});

document.querySelector("#submit-t3").addEventListener("click", () => {
  let ft3_q1 = document.querySelector(".ft3-q1").value;
  let ft3_q2 = document.querySelector(".ft3-q2").value;
  let ft3_q3 = document.querySelector(".ft3-q3").value;
  let ft3_q4 = document.querySelector(".ft3-q4").value;

  if (
    ft3_q1 === "Hallo" &&
    ft3_q2 === "Wie heißt du?" &&
    ft3_q3 === "Wo kommst du her?" &&
    ft3_q4 === "Wie alt bist du?"
  ) {
    document.querySelector(".ft3-q1").style.backgroundColor = "#94d82d";
    document.querySelector(".ft3-q2").style.backgroundColor = "#94d82d";
    document.querySelector(".ft3-q3").style.backgroundColor = "#94d82d";
    document.querySelector(".ft3-q4").style.backgroundColor = "#94d82d";
    document.querySelector("#ft1-score-field-3").value = "5 Punkte";
  } else {
    alert("Wrong");
  }
});

document.querySelector("#submit-t4").addEventListener("click", () => {
  let true_a = document.querySelector(".ft4-qat").checked;
  let false_a = document.querySelector(".ft4-qaf").checked;
  let true_b = document.querySelector(".ft4-qbt").checked;
  let false_b = document.querySelector(".ft4-qbf").checked;
  let true_c = document.querySelector(".ft4-qct").checked;
  let false_c = document.querySelector(".ft4-qcf").checked;
  let true_d = document.querySelector(".ft4-qdt").checked;
  let false_d = document.querySelector(".ft4-qdf").checked;
  let true_e = document.querySelector(".ft4-qet").checked;
  let false_e = document.querySelector(".ft4-qef").checked;

  if (true_a && true_b && true_c && true_d && true_e) {
    document.querySelector("#ft1-score-field-4").value = "5 Punkte";
    alert("Richtig");
  } else if (false_a && false_b && false_c && false_d && false_e) {
    alert("Falsch");
  }
});

document.querySelector("#submit-t5").addEventListener("click", () => {
  let ft5_qa = document.querySelector(".ft5-qa").value;
  let ft5_qb = document.querySelector(".ft5-qb").value;
  let ft5_qc = document.querySelector(".ft5-qc").value;
  let ft5_qd = document.querySelector(".ft5-qd").value;
  let ft5_qe = document.querySelector(".ft5-qe").value;

  if (
    ft5_qa === "What is your name?" &&
    ft5_qb === "Where are you from?" &&
    ft5_qc === "How old are you?" &&
    ft5_qd === "Goodbye." &&
    ft5_qe === "Excuse me."
  ) {
    document.querySelector(".ft5-qa").style.backgroundColor = "#94d82d";
    document.querySelector(".ft5-qb").style.backgroundColor = "#94d82d";
    document.querySelector(".ft5-qc").style.backgroundColor = "#94d82d";
    document.querySelector(".ft5-qd").style.backgroundColor = "#94d82d";
    document.querySelector(".ft5-qe").style.backgroundColor = "#94d82d";
    document.querySelector("#ft1-score-field-5").value = "5 Punkte";
  } else {
    alert("Wrong");
  }
});
