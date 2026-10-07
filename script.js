let age = 25;
let ticketPrice = age < 5
    ? "Free"
    : age < 12
    ? "₹100"
    : age < 60
    ? "₹250"
    : "₹150";
console.log(`Age: ${age}, Ticket Price: ${ticketPrice}`);

let cartTotal = 1500;
let shippingCost = cartTotal >= 2000
    ? "Free Shipping"
    : cartTotal >= 1000
    ? "₹50"
    : "₹100";
console.log("Cart Total: ₹" + cartTotal);
console.log("Shipping Cost:", shippingCost);

let isMember = true;
let totalSpent = 6000;
let discountType = (isMember && totalSpent >= 5000)
    ? "VIP Discount"
    : (totalSpent >= 5000)
    ? "Regular Discount"
    : "No Discount";
console.log("Discount Type:", discountType);

let scores = [75, 60, 45, 30, 50];
let sum = scores[0] + scores[1] + scores[2] + scores[3] + scores[4];
let average = sum / 5;
let result = average >= 40 ? "Pass" : "Fail";
console.log("Scores:", scores);
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Result:", result);

let products = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 800, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];
let product4 = {
    name: "Headphones",
    price: 2000,
    quantity: 2
};
let subtotal4 = product4.price * product4.quantity;
console.log("4th Product:", product4.name);
console.log("Subtotal:", subtotal4);

console.log("5" + 3);
console.log("5" - 3);
console.log("abc" * 2);
console.log(NaN === NaN);
console.log([] == false);
console.log("10" == 10);
console.log(null + 1);


console.log(typeof NaN); 
console.log("abc" * 2);       

1. Create THREE product objects

let product1 = {
    name: "Laptop",
    price: 45000,
    qty: 1
};
let product2 = {
    name: "Mouse",
    price: 800,
    qty: 2
};
let product3 = {
    name: "Keyboard",
    price: 1500,
    qty: 1
};
let pricesAreNumbers =
    typeof product1.price === "number" &&
    typeof product2.price === "number" &&
    typeof product3.price === "number";

console.log("Are all prices numbers?", pricesAreNumbers);

if (pricesAreNumbers) {
    let subtotal1 = product1.price * product1.qty;
    let subtotal2 = product2.price * product2.qty;
    let subtotal3 = product3.price * product3.qty;
    let grandTotal = subtotal1 + subtotal2 + subtotal3;
    let discountPercent =
        grandTotal >= 5000
            ? 20
            : grandTotal >= 2000
            ? 10
            : grandTotal >= 1000
            ? 5
            : 0;

    let discountAmount = grandTotal * discountPercent / 100;
    let amountAfterDiscount = grandTotal - discountAmount;
    let gstAmount = amountAfterDiscount * 18 / 100;
    let finalPayable = amountAfterDiscount + gstAmount;
    let freeShipping =
        (amountAfterDiscount >= 1500) || (3 >= 3);
    let shippingStatus = freeShipping
        ? "FREE"
        : "₹100 shipping charge";
    let loyaltyPoints = finalPayable / 100;
    let receipt = `
    ${product1.name} x ${product1.qty}        ₹${subtotal1.toFixed(2)}
    ${product2.name} x ${product2.qty}        ₹${subtotal2.toFixed(2)}
    ${product3.name} x ${product3.qty}        ₹${subtotal3.toFixed(2)}
    Grand Total:                 ₹${grandTotal.toFixed(2)}
    Discount:                    ${discountPercent}%
    Discount Amount:             ₹${discountAmount.toFixed(2)}
    Amount After Discount:       ₹${amountAfterDiscount.toFixed(2)}
    GST (18%):                   ₹${gstAmount.toFixed(2)}
    Final Payable Amount:        ₹${finalPayable.toFixed(2)}
    Shipping:                    ${shippingStatus}
    Loyalty Points:              ${loyaltyPoints}
    Thank you for shopping with us!`;

    console.log(receipt);
    document.getElementById("receipt").textContent = receipt;
}
else {
    console.log("Error: All product prices must be Numbers.");
}