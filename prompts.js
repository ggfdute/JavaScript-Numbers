function myFunction(){
    let number1 = prompt("input a number:");
    let number2 = prompt("input a number:");
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);

    let add = num1+num2;
    console.log(add);
    let subtract = num1-num2;
    console.log(subtract);
    let multiply = num1*num2;
    console.log(multiply);
    let divide = num1/num2;
    console.log(divide);
    let exponent = Math.pow(num1, num2);
    console.log(exponent);
    let remainder = num1%num2;
    console.log(remainder);
}

function myFunction2(){
    console.log(Math.floor(Math.random() *35) + 1);
}

function myFunction3(){
    let decimal = prompt("insert a decimal to round to the nearest number");
    console.log(Math.round(decimal));
}

function myFunction4(){
    number1 = prompt("input a number:");
    number2 = prompt("input a number:");
    exponent = Math.pow(number1, number2);
    console.log(exponent);
}