"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// compile1
function greet(user) {
    return "Hello, ".concat(user.name, "! You are ").concat(user.age, " years old.");
}
var user1 = {
    name: "Alice",
    age: 21,
};
console.log(greet(user1));
function sumPrices(items) {
    return items.reduce(function (total, item) {
        return total + item.price;
    }, 0);
}
var cart = [
    { name: "apple", price: 100 },
    { name: "banana", price: 150 },
    { name: "banana", price: 200 },
];
console.log(sumPrices(cart));
function calculateFinalPrice(item, paymentMethod) {
    switch (paymentMethod) {
        case "cash":
            return item.price * 1.05;
        case "credit":
            return item.price;
    }
}
console.log(calculateFinalPrice({ name: "apple", price: 200 }, "cash")); // => 190
console.log(calculateFinalPrice({ name: "banana", price: 150 }, "credit")); // => 150
function calculateTaxIncludedPrice(item) {
    if (item.name === "book") {
        return Math.round(item.price * 1.08);
    }
    else {
        return Math.round(item.price * 1.10);
    }
}
console.log(calculateTaxIncludedPrice({ name: "book", price: 1000 })); // => 1080
console.log(calculateTaxIncludedPrice({ name: "apple", price: 200 })); // => 220
