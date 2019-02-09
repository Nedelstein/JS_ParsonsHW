
// 1. Conditions Test - Random Numbers. 


function randomNumber(){
let min = 1;
let max = 100;
let rand = Math.floor(Math.random() * max) + min; //returns integer between 1 - 100

// says if number is even or odd.
if (rand % 2 === 0){
    console.log(rand,"this is an even number");
}
    else{
        console.log(rand,"this is an odd number");
}
}

// 2. function that returns the squares of numbers 1- 100
function numberSquares() {
    for (let i = 1; i < 101; i++) {
        console.log(Math.pow(i,2));
    }
}

// 3. function that flips between heads and tails until you get tails
function headsOrTails(){
    let heads = 0;
    let tails = 1;
    let flip = Math.floor(Math.random() * 2);

    if(flip != tails){
        console.log(flip + " Keep flipping until you get to tails.");
        headsOrTails();
    } else {
        console.log(flip + " It's tails. You win!");
    }
    // return flip;
}

// 4. factoral finder function
function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }

//triangle as function
  function triangle() {
      for (let num = 0; num < 10; num++){
          console.log("x".repeat(num));
      }
  }

//chessboard as a function:
function chessBoard(number) {
    for(let i = 0; i < number; i++){
        console.log("# ".repeat(number));
    }
}