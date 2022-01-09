var firstnumber;
var secondnumber;
var multiplicationclicked;
var additionclicked;
var subtractionclicked;
var divisionclicked;
var numberclicked;
var number2clicked;
//set textbox1 to enable
var input = 1;
//numberclicked disabled
var numberclicked = false;
var number2clicked = false;
function input1(){
    //textbox1 enable, textbox2 disable
    input = 1;
}
function input2(){
    //textbox2 enable, text
    input = 2;
}
function number0() {
    //inputs the digit 0
    switch (input){
        case 2: document.getElementById("textbox1").textContent += 0; 
        numberclicked = true;
        break;
        case 1: document.getElementById("textbox0").textContent += 0;
        number2clicked = true;
        break;
    }
}

function number1(){
    //inputs the digit 1
    switch (input){
        case 2: document.getElementById("textbox1").textContent += 1; 
        numberclicked = true;
        break;
        case 1: document.getElementById("textbox0").textContent += 1;
        number2clicked = true;
        break;
    }
}   
function number2(){
    //inputs the digit 2
    switch (input){
        case 2: document.getElementById("textbox1").textContent += 2; 
        numberclicked = true;
        break;
        case 1: document.getElementById("textbox0").textContent += 2;
        number2clicked = true;
        break;
    }
}
function number3(){ 
    //inputs the digit 3
    switch (input){
        case 2: document.getElementById("textbox1").textContent += 3; 
        numberclicked = true;
        break;
        case 1: document.getElementById("textbox0").textContent += 3;
        number2clicked = true;
        break;
    }
}
function number4(){
    //inputs the digit 4
    switch (input){
        case 2: document.getElementById("textbox1").textContent += 4; 
        numberclicked = true;
        break;
        case 1: document.getElementById("textbox0").textContent += 4;
        number2clicked = true;
        break;
    }
}
function number5(){
    //inputs the digit 5
    switch (input){
        case 2: document.getElementById("textbox1").textContent += 5; 
        numberclicked = true;
        break;
        case 1: document.getElementById("textbox0").textContent += 5;
        number2clicked = true;
        break;
    }
}
function number6(){
    //inputss the digit 6
    switch (input){
        case 2: document.getElementById("textbox1").textContent += 6; 
        numberclicked = true;
        break;
        case 1: document.getElementById("textbox0").textContent += 6;
        number2clicked = true;
        break;
    }
}
function number7(){
    //inputs the digit 7
    switch (input){
        case 2: document.getElementById("textbox1").textContent += 7; 
        numberclicked = true;
        break;
        case 1: document.getElementById("textbox0").textContent += 7;
        number2clicked = true;
        break;
    }
}
function number8(){
    //inputs the digit 8
    switch (input){
        case 2: document.getElementById("textbox1").textContent += 8; 
        numberclicked = true;
        break;
        case 1: document.getElementById("textbox0").textContent += 8;
        number2clicked = true;
        break;
    }
}
function number9(){ 
    //inputs the digit 9
    switch (input){
        case 2: document.getElementById("textbox1").textContent += 9; 
        numberclicked = true;
        break;
        case 1: document.getElementById("textbox0").textContent += 9;
        number2clicked = true;
        break;
    }
}
function decimal(){
    //inputs a decimal point
    switch (input){
        case 2: document.getElementById("textbox1").textContent += "."; 
        numberclicked = true;
        break;
        case 1: document.getElementById("textbox0").textContent += ".";
        number2clicked = true;
        break;
    }
}
function addition(){
    //requests as addition
    additionclicked = true;
    switch (input){
        case 2: document.getElementById("textbox1").textContent += "+"; 
        break;
        case 1: document.getElementById("textbox0").textContent += "+";
        break;
    }  
}
function subtraction(){
    //requests as subtraction
    switch (input){
        case 2: document.getElementById("textbox1").textContent += "-"; 
            if(numberclicked == true){
                subtrationclicked = true;
            }
            else if(numberclicked == false) {
                subtractionclicked = false;
            }
        break;
        case 1: document.getElementById("textbox0").textContent += "-";
            if(numberclicked == true){
                subtrationclicked = true;
            }
            else if(numberclicked == false) {
                subtractionclicked = false;
            }
        break;
    }
}
function multiplication(){
    //requests as multiplication
    multiplicationclicked = true;
    switch (input){
        case 2: document.getElementById("textbox1").textContent += "*"; 
            break;
        case 1: document.getElementById("textbox0").textContent += "*";
            break;
    }
    
}
function division(){
    //requests as division
    divisionclicked = true;
    switch (input){
        case 2: document.getElementById("textbox1").textContent += "/"; 
            break;
        case 1: document.getElementById("textbox0").textContent += "/";
            break;
    }
} 
function number_clear(){
    //resets everything
    input = 1;
    subtractionclicked = false;
    additionclicked = false;   
    multiplicationclicked = false;
    divisionclicked = false;
    numberclicked = false;
    document.getElementById("textbox0").textContent = "";
    document.getElementById("textbox1").textContent = "";
}
function number_submit(){
    //Checks whether the request is addition then calculates the request
    if(additionclicked == true){ 
        
        firstnumber = document.getElementById("textbox0");
        secondnumber = document.getElementById("textbox1");
    
            document.getElementById("textbox1").textContent = parseFloat(firstnumber.textContent) + parseFloat(secondnumber.textContent);
    
    }
    //Checks whether the resquest is subtraction then calculates the request
    else if(subtractionclicked == true){
        
        firstnumber = document.getElementById("textbox0");
        secondnumber = document.getElementById("textbox1");

            document.getElementById("textbox1").textContent = parseFloat(firstnumber.textContent) - parseFloat(secondnumber.textContent);
    
    }
    //Checks whether the request is multiplication then calculates the request
    else if(multiplicationclicked == true){
        
        firstnumber = document.getElementById("textbox0");
        secondnumber = document.getElementById("textbox1");

            document.getElementById("textbox1").textContent = (parseFloat(firstnumber.textContent) * parseFloat(secondnumber.textContent));
    
    }
    //Checks whether the request is multiplication then calculates the request
    else if(divisionclicked == true){
        
        firstnumber = document.getElementById("textbox0");
        secondnumber = document.getElementById("textbox1");
            document.getElementById("textbox1").textContent = (parseFloat(firstnumber.textContent) / parseFloat(secondnumber.textContent));

    }
}
