// bubble items
let bubbleItems = document.querySelector(".bubble-items");
let circle = document.querySelector(".circle");
let circleIcon = document.querySelector(".circle ion-icon");
circle.addEventListener("click", function (e) {
  e.preventDefault();
  if (bubbleItems.style.height == "auto") {
    bubbleItems.style.height = 0;
    circleIcon.style.transform = "rotate(0deg)";
  } else {
    bubbleItems.style.height = "auto";
    circleIcon.style.transform = "rotate(180deg)";
  }
});
