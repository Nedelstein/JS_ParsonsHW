

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
function headOrTails(){
    let heads = 0;
    let tails = 1;
    let flip = Math.floor(Math.random() * 2);

    if(flip != tails){
        console.log(flip);
        console.log("Keep flipping until you get to tails.");
        headsOrTails();
    } else {
        console.log(flip);
        console.log("It's tails. You win!");
    }
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

  // 5. Patterns using for loops
  let number = 1;
  for (let number = 0; number < 10; number ++){
console.log('x'.repeat(number));
  }


//6. chess board
let number =10;
for (let i = 0; i < 10; i++){
    console.log("#  ".repeat(number));
}

/// 7. ASCII Art
let charArray = ["/", "|", "^"];

let rand = charArray[Math.floor(Math.random() * charArray.length)];

function write(){
    for(let i = 0; i< 3; i++){
    console.log(rand[i], rand[i], rand[i], rand[i], rand[i], rand[i]);
    }
}
write();