//Snippet 1 (return is not written)
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 3));

//Snippet 2 (let is not written due to which discount is not declared)
function setDiscount() {
    let discount = 20;
    console.log(discount);
}

setDiscount();

//Snippet 3 (The parameter balance is a local variable inside withdraw)
let balance = 1000;
function withdraw(currentBalance, amount) {
    currentBalance = currentBalance - amount;
    return currentBalance;
}

balance = withdraw(balance, 200);
console.log(balance);


//Snippet 4 (A const function expression is called before it is initialized)
const sayHello = function() {
    console.log("Hi!");
};

sayHello();