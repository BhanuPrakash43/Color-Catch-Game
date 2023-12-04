var button = document.querySelector("button");
var ok = document.querySelector("#ok");
var h1 = document.querySelector("h1");
var square = document.querySelectorAll(".square");
var colors = generaterandomcolors(9);
var val = colorgenerator();
var two = document.querySelector("#two");
var hbtn = document.querySelector("#hbtn");
var mbtn = document.querySelector("#mbtn");
var ebtn = document.querySelector("#ebtn");
var count = 9;

hbtn.addEventListener("click", function () {
  count = 9;
  hbtn.classList.add("selected");
  mbtn.classList.remove("selected");
  ebtn.classList.remove("selected");
  colors = generaterandomcolors(9);
  val = colorgenerator();
  ok.textContent = val;
  h1.style.backgroundColor = "blue";
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].style.display = "block";
  }
  two.textContent = "";
});

mbtn.addEventListener("click", function() {
  count = 6;
  hbtn.classList.remove("selected");
  mbtn.classList.add("selected");
  ebtn.classList.remove("selected");
  colors = generaterandomcolors(6);
  val = colorgenerator();
  ok.textContent = val;
  h1.style.backgroundColor = "blue";
  for(var i = 0; i<square.length; i++) {
    if(i < colors.length) {
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = "block";
    }
    else{
      square[i].style.display = "none";

    }
  }
  two.textContent = "";
});

ebtn.addEventListener("click", function () {
  count = 3;
  hbtn.classList.remove("selected");
  mbtn.classList.remove("selected");
  ebtn.classList.add("selected");
  colors = generaterandomcolors(3);
  val = colorgenerator();
  ok.textContent = val;
  h1.style.backgroundColor = "blue";
  for (var i = 0; i < square.length; i++) {
    if (i < colors.length) {
      square[i].style.backgroundColor = colors[i];
    } 
    else {
      square[i].style.display = "none";
    }
  }
  two.textContent = "";
});

ok.textContent = val;
for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];
}

button.addEventListener("click", function () {
  colors = generaterandomcolors(count);
  val = colorgenerator();
  ok.textContent = val;
  h1.style.backgroundColor = "blue";
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
  }
  two.textContent = "";
});

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function () {
    var colorCatch = this.style.backgroundColor;
    if (colorCatch != val) {
      this.style.backgroundColor = "#232323";
      two.textContent = "Try Again";
    } 
    else {
      two.textContent = "Correct";
      h1.style.backgroundColor = colorCatch;
      changeall();
      ok.textContent = "Play again?";
    }
  });
}

function changeall() {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = val;
  }
}

function colorgenerator() {
  var temp = Math.floor(Math.random() * colors.length);
  return colors[temp];
}

function generaterandomcolors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomcolor());
  }
  return arr;
}

function randomcolor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
