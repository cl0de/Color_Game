var numSquared = 6;
var colors = generateRandomColors(numSquared); 
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();//;colors[3]
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquared = 3;
    colors = generateRandomColors(numSquared);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i= 0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }

});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquared = 6;
    colors = generateRandomColors(numSquared);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i= 0; i< squares.length; i++){
        //if(colors[i]){
            squares[i].style.background = colors[i];
       // }else{
            squares[i].style.display = "block";
        //}
    } 
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquared);
    //pick a new color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    //change colors of squares
    for( var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    //change color when new play again
    h1.style.background = "#232323";
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i< squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = (this.style.backgroundColor);
        //compare color to picked color
         if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            
         }else {
             this.style.backgroundColor = "#232323";
             messageDisplay.textContent = "Try Again";
        }
    });
}
 function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
 }
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor());
    }
    //return that array
    return arr;
}
function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
        
   }
//}
