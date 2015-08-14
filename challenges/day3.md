## ADVANCED LOOPS & CONDITIONALS

0. bleed_right - [solution](/challenges/solutions/bleed_right.js)

  start:  ['.', '.', 'b', '.', '.']  
  finish: ['.', '.', 'b', 'b', 'b'] 
  var initial_state = [ '', '', 'b', '', '' ];

function main(n) {

 for(var i = 0; i < 5; i++){

  if(!onBlue()){
    moveRight();
 } 

 else
 {
    moveRight();
    draw();
}
  
}


}  

1. invert_colors - [solution](/challenges/solutions/invert_colors.js)

  start:  ['b', 'g', 'g', 'b', 'b']  
  finish: ['g', 'b', 'b', 'g', 'g']  

  start:  ['b', '.', 'g', '.', 'b']  
  finish: ['g', '.', 'b', '.', 'g']  function main(n) {
 
 for(var i = 0; i < 5; i++){

  console.log("we are on turn", i, "are we on blue?", onBlue(), "maybe green?", onGreen())

  if(onBlue()){
      erase();
      useGreen();
      draw(); 
      moveRight();

    } 
   else if(onGreen())
   {
      erase();
      useBlue();
      draw();
      moveRight();
   }
   else{
    moveRight();
   }
  
}

  

2. pull_blues_right - [solution](/challenges/solutions/pull_blues_right.js)

  start:  ['b', '.', 'b', '.', '.']  
  finish: ['.', '.', '.', 'b', 'b']  

3. pull_blues_left - [solution](/challenges/solutions/pull_blues_left.js)

  start:  ['b', 'g', 'g', 'b', 'b']  
  finish: ['g', 'b', 'b', 'g', 'g']  

4. reverse_row - [solution](/challenges/solutions/reverse_row.js)

  start:  ['b', 'g', 'g', '.', 'g']  
  finish: ['g', '.', 'g', 'g', 'b']  
Solutions:

blue beats green beats red.
red beats blue beats yellow beats green beats red beets oranges bananas.
red beats orange beats blue.