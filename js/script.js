const numSquares = 6;
const colors = guessColors(6);
const squares = document.querySelectorAll('.square');
const pickedColor = pickColor();
const colorDisplay = document.getElementById("display");
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector("#reset");
const easyBtn = document.querySelector("#easyBtn")
const hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener('click', function () {
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    colors = guessColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = 'none'
        }
    }
});

hardBtn.addEventListener('click', function () {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    colors = guessColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    for (let i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i]
            squares[i].style.display = 'block';
    }
});

resetButton.addEventListener("click", function() {
    colors = guessColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = 'block';
    }

    h1.style.backgroundColor = 'steelblue';
});


colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length ; i++) {
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener('click', function () {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
        messageDisplay.textContent = 'Prawidłowo!';
        resetButton.textContent = "zagraj jeszcze raz"
        changeColors(clickedColor);
        h1.style.background = clickedColor;

    }else {
        this.style.background ='#232323';
        messageDisplay.textContent = 'Próbuj dalej'
    }
    })
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function guessColors(num) {
    //Tworzymy array
    const arr = []
    //
    for (let i = 0; i < num;i++){
    arr.push(randomColor())
    }
    // Zwracamy wylosowany arr
    return arr;
}


function randomColor() {
   const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    return 'rgb(' + a +', ' + b +', ' + c+')';
}