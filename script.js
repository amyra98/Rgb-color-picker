var totSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var reqButtons = document.querySelectorAll('.req');

start();

function start(){

  setUpReqButtons();
  DesignSquares();
  reset();
}

function setUpReqButtons(){
  for(var i = 0; i < reqButtons.length; i++){
    reqButtons[i].addEventListener('click', function(){
      reqButtons[0].classList.remove('selected');
      reqButtons[1].classList.remove('selected');
      this.classList.add('selected');
      totSquares = this.textContent === "Easy" ? 3 :6;   
      reset();
    });
  }
}

function DesignSquares(){
  for(var i = 0; i < squares.length; i++){
   
    squares[i].addEventListener("click", function(){
     
      var clickedColor = this.style.background;
     
      if(clickedColor === pickedColor){
        messageDisplay.textContent = 'Correct!!!';
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(totSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "rgb(219, 193, 47)";
}

resetButton.addEventListener('click', function(){
  reset();
});

function changeColors(color){
  for(var i = 0; i < colors.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(tot){
  var arr = [];

  for(var i = 0; i < tot; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
