var row, colors, kyrel, return_value, rando;

/*
   If you need variables, please declare them ^up here^!
   That way, you will be able to check them out in the Chrome console.
   Just don't use any that I'm already using!

   INSTRUCTIONS:
   - Write all of your code inside the "main" function below.
   - Use this file to build/test your programs.

   You can call: moveRight(), moveLeft(),
                 useGreen(), useBlue(), draw(), erase(),
                 onGreen(), onBlue()

  You can also (re)configure the initial state of the row:
    '.' => empty
    'b' => blue
    'g' => green
*/
/*moveRight();
moveLeft();
useGreen();
useBlue();
onBlue();
onGreen();
draw();
erase();*/

// day 3.1
var initial_state = [ 'g', '', 'b', '', '' ];

function main(n) {
 
 for(var i = 0; i < 5; i++){

  console.log("we are on turn", i, "are we on blue?", onBlue(), "maybe green?", onGreen())

  if(onBlue()){
      erase();
      useGreen();
      draw(); 
      move("r",3);

    } 
   else if(onGreen())
   {
      erase();
      useBlue();
      draw();
      move("r",4);
   }
   else{
    move("r",1);
   }
  
}


} // END MAIN





//////////////////////////////
//
// BEWARE, INNER WORKINGS BELOW
// Feel free to read around, but just don't break anything :)
//
//////////////////////////////


row = {
  x: 5
}

colors = {
  empty: '#fff',
  gray: '#ccc',
  blue: 'blue',
  green: 'green'
};

kyrel = {
  x: 0,
  color: colors.blue
};

function play() {
  return_value = main(rando);
  if(typeof return_value !== 'undefined') {
    $(".instructions").append("<div><strong>returned "+return_value+"</strong></div>");
  }
  $(".play").hide();
  $(".reset").show();
}

function initializeRow() {
    for(var j=0; j<row.x; j++) {
      var cell = $("tr").find("td").eq(j);
      if(initial_state[j] == 'b') {
        cell.html('<div class="dot dot-blue"></div>')
        cell.find('.dot').css('background', colors.blue);
      } else if(initial_state[j] == 'g') {
        cell.html('<div class="dot dot-green"></div>')
        cell.find('.dot').css('background', colors.green);
      } else {
        cell.find(".dot").remove();
      }
    }
}

function updateRow() {
  $("td").css('border-color', colors.gray);
  currentSquare().css('border-color', kyrel.color);
}

function currentSquare() {
  return $("tr").find("td").eq(kyrel.x);
}

function moveLeft(n) {
  $(".instructions").append("<div>moveLeft</div>");
  if(kyrel.x > 0) {
    kyrel.x = kyrel.x - n;
    updateRow();
  }

}

function moveRight(n) {
  $(".instructions").append("<div>moveRight</div>");
  if(kyrel.x < row.x - n) {
    kyrel.x = kyrel.x + n;
    updateRow();
  }
}
function move(x,y) {
   if(x==="r"){
    moveRight(y);
   }else if(x==="l"){
    moveLeft(y);
   }
  }
function draw() {
  $(".instructions").append("<div>draw</div>");
  currentSquare().html('<div class="dot"></div>')
  currentSquare().find('.dot').css('background', kyrel.color).addClass('dot-'+kyrel.color);
}

function erase() {
  $(".instructions").append("<div>erase</div>");
  currentSquare().find(".dot").remove();
}

function useBlue() {
  $(".instructions").append("<div>useBlue</div>");
  kyrel.color = colors.blue;
  updateRow();
}

function useGreen() {
  $(".instructions").append("<div>useGreen</div>");
  kyrel.color = colors.green;
  updateRow();
}

function onBlue() {
  return currentSquare().find(".dot.dot-blue").length > 0;
}

function onGreen() {
  return currentSquare().find(".dot.dot-green").length > 0;
}
function  isEmpty(){
  if((kyrel.color !== colors.green) || (kyrel.color !== colors.blue)){
    return true;
  }
}


$(document).ready(function() {
  rando = parseInt(Math.random()*10)
  console.log("Our random number for this run is "+rando);

  //attach listeners
  $(".play").click(play);

  // Start it up!
  initializeRow();
  updateRow();
});

