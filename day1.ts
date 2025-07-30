export {}

// compile1
function greet(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

type User = {
  name: string,
  age: number,
};

const user1: User = {
  name: "Alice",
  age: 21,
}
console.log(greet(user1));

// compile2
type CartItem =  { name: string, price: number };
type Cart = CartItem[];

function sumPrices(items: Cart): number {
  return items.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

const cart: Cart = [
  { name: "apple", price: 100 },
  { name: "banana", price: 150 },
  { name: "banana", price: 200 },
];

console.log(sumPrices(cart));

// compile3
type PaymentMethod = "cash" | "credit";

function calculateFinalPrice(item: { name: string; price: number },
  paymentMethod: PaymentMethod): number {
    switch(paymentMethod) {
      case "cash":
        return item.price * 1.05;
      case "credit":
        return item.price;
    }
}

console.log(calculateFinalPrice({ name: "apple", price: 200 }, "cash"));    // => 190
console.log(calculateFinalPrice({ name: "banana", price: 150 }, "credit")); // => 150

// compile4
type Item = { name: string, price: number};
function calculateTaxIncludedPrice(item: Item): number {
  if(item.name === "book") {
    return Math.round(item.price * 1.08);
  } else {
    return Math.round(item.price * 1.10);
  }
}
console.log(calculateTaxIncludedPrice({ name: "book", price: 1000 }));   // => 1080
console.log(calculateTaxIncludedPrice({ name: "apple", price: 200 }));   // => 220

