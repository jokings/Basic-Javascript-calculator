//Creating a basic javascript calculator

//accept the numbers from the users using prompt
const operator=prompt('Enter Operation to Peform the Calculation(either+,-,* or/):');
const number1=parseFloat(prompt('Enter the First Number'));
const number2=parseFloat(prompt('Enter the Second Number'));

//declaration of the variables
if(operator=='+'){//use+(addition)operator to add two numbers
    result=number1+number2; 
}
else if(operator=='-'){//use-(subtraction)operator to subtract two numbers
    result=number1-number2;
}
else if(operator=='*'){//use*(mutiplication)operator to mutiply two numbers
    result=number1*number2;
}
else{
    result=number1/number2;//use/(division)operator to divide two numbers
}
//display the result of the Calculator
window.alert("Result is " +  result);