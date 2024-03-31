"use strict";

// noting variables
const ques = document.querySelectorAll(".question");
const ans = document.querySelectorAll(".ans");
const close = document.querySelectorAll(".fa-xmark");
const open = document.querySelectorAll(".fa-plus");

for (let i = 0; i < ques.length; i++) {
  open[i].addEventListener("click", function () {
    ans[i].style.display = "block";
    open[i].style.display = "none";
    close[i].style.display = "block";
  });

  close[i].addEventListener("click", function () {
    ans[i].style.display = "none";
    open[i].style.display = "block";
    close[i].style.display = "none";
  });
}
