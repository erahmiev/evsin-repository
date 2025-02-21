document.querySelector(".ft1-q1-check").addEventListener("click", () => {
  let ft1_q1 = document.querySelector(".ft1-q1").value;
  //   let ft1_qb = document.querySelector(".ft1-qb").value;
  //   let ft1_qc = document.querySelector(".ft1-qc").value;
  //   let ft1_qd = document.querySelector(".ft1-qd").value;
  //   let ft1_qe = document.querySelector(".ft1-qe").value;

  if (ft1_q1 === "Mein Name ist Anna") {
    document.querySelector(".ft1-q1").style.backgroundColor = "#94d82d";
  } else {
    alert("Wrong");
  }
});
