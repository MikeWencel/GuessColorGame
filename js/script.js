var colors = guessColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById("display");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

function randomise (){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }
}

easyBtn.addEventListener('click', function () {
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    colors = guessColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    randomise();
    for(var i = 3; i < squares.length; i++){
        squares[i] = squares[i].style.backgroundColor = '#232323'
    }


});

hardBtn.addEventListener('click', function () {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    colors = guessColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    randomise()
});

resetButton.addEventListener("click", function() {
    colors = guessColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }

    h1.style.backgroundColor = '#232323';
});


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length ; i++) {
    //Dodaje kolory dla kwadratów
    squares[i].style.backgroundColor = colors[i]

    //Działanie pointera - klikanie
    squares[i].addEventListener('click', function () {
    //Pobieranie klikniętego koloru
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
        messageDisplay.textContent = 'Prawidłowo!';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "zagraj jeszcze raz"
    }else {
        this.style.backgroundColor ='#232323';
        messageDisplay.textContent = 'Próbuj dalej'
    }

    })
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function guessColors(num) {
    //Tworzymy array
    var arr = []
    //
    for (var i = 0; i < num;i++){
    arr.push(randomColor())
    }
    // Zwracamy wylosowany arr
    return arr;
}


function randomColor() {
   var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    return 'rgb(' + a +', ' + b +', ' + c+')';
}