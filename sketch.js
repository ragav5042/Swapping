

var a = prompt('Enter the first variable: ');
var b=prompt("Enter the Second Variable")
function setup(){
  createCanvas(400,400);
  var b2 = createButton("click here to Swap");
  b2.mousePressed(swap)
 
  }


function draw()
{
  background("Red")
}

function swap(){
  [a,b]=[b,a];
  console.log("Value of 1st variable after Swapping"+a)
  console.log("Value of 2nd variable after Swapping"+b)
  
}
