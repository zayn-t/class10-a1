var weights = [35,38,40,45] 
var sum = 0
var avg
function setup() 
{
  createCanvas(400,400);
  sum=weights[0]+weights[1]+weights[2]+weights[3]
  console.log (sum)
  avg=sum/weights.length 
  console.log (avg)
}

function draw() 
{
background(51);

}

