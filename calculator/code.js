"use strict"

var currentNumber;
var memory;
var op;

function updateScreen(num) {

    currentNumber = num;
    document.getElementById('_input').innerHTML=num
}

function cleanScreen(operand) {
    memory = currentNumber;
    document.getElementById('_input').innerHTML=" ";
    op=operand;

}
function calculate(){
    if(op==1) // add
        document.getElementById('_input').innerHTML= memory+currentNumber;
    else if(op==2) // substract
        document.getElementById('_input').innerHTML= memory-currentNumber;
    else if(op==3) // multiply
        document.getElementById('_input').innerHTML= memory*currentNumber;
    else if(op==4) // divide
        document.getElementById('_input').innerHTML= (memory / currentNumber);
    else { // clear
        document.getElementById('_input').innerHTML = " ";
        memory = 0;
        currentNumber = 0;
    }
        currentNumber=document.getElementById('_input').innerHTML
}