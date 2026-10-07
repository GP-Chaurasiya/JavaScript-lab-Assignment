const operator = prompt('Enter operator(either +,-,*or/):');

const number1=parseFloat('Enter number 1:');
const number2=parseFloat('Enter number 1:');

let result;

if(operator == '+'){
    result=number1+number2;
}

else if(operator == '-'){
    result=number1-number2;
}

else if(operator =='*'){
    result=number1*number2;
}

else{
    result=number1/number2;
}

console.log('${number1} ${operator} ${number2} = ${result}');
