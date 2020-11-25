"use strict"

var currentNumber = 0;
var memory;
var op;

function updateScreen(num) {

    currentNumber = currentNumber* 10  + num;
    document.getElementById('_input').innerHTML=currentNumber;
}

function cleanScreen(operand) {
    memory = currentNumber;
    currentNumber = 0; 
    op=operand;
    document.getElementById('_input').innerHTML=" ";

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