// Love button
$(document).ready(function () {
  $(".loveBtn").click(function () {
    $(".loveBtn").toggleClass("heart-active");
    $(".text").toggleClass("heart-active");
    $(".numb").toggleClass("heart-active");
    $(".heart").toggleClass("heart-active");
  });
});

// Thumbs up & down
const btn1 = document.querySelector("#green");
const btn2 = document.querySelector("#red");

btn1.addEventListener("click", function () {
  if (btn2.classList.contains("red")) {
    btn2.classList.remove("red");
  }
  this.classList.toggle("green");
});

btn2.addEventListener("click", function () {
  if (btn1.classList.contains("green")) {
    btn1.classList.remove("green");
  }
  this.classList.toggle("red");
});
