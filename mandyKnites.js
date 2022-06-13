let count= 0;
let countDisplayer = document.getElementById ("count-displayer")

let totalCountDisplayer = document.getElementById ("total-count-displayer")


countDisplayer.innerText=0;

function add() {

  count = count + 1;
  countDisplayer.textContent= count;
}

/*function save() {

  count = count ;
  totalCountDisplayer.textContent+= count + " - ";
  count = 0 ;
}*/

function save() {

  countStr = count + " - ";
  totalCountDisplayer.textContent+= countStr
  count = 0 ;
  countDisplayer.textContent= 0;
}

function restart() {

  count = 0
  totalCountDisplayer.textContent= 0;
  countDisplayer.textContent= 0;
}
