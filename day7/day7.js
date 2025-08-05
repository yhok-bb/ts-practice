"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Q4");
// Q4: 任意の型の値を受け取り、そのまま返す関数をジェネリクスで書こう
function identity(value) {
    return value;
}
var x = identity("hello"); // 推論される型は？
console.log(x);
var y = identity(1);
console.log(y);
var z = identity(true);
console.log(x);
var s = identity([1, 2, 3]);
console.log(s);
var t = identity({ name: "Apolo", age: 19 });
console.log(t);
// Q5: lengthプロパティを持つものだけを引数に受け取れる関数を作ってください
console.log("Q5");
function printLength(value) {
    console.log(value);
}
// 以下の呼び出しが通るように（NGな場合は型エラー）
printLength("hello");
printLength([1, 2, 3]);
printLength({ length: 10 });
// printLength(42); // これはエラーになるように
// Q6: オブジェクトから任意のキーを受け取り、その値を返す関数を作ってください
console.log("Q6");
function getProp(value, key) {
    return console.log(value[key]);
}
var user = { id: 1, name: "Alice" };
getProp(user, "id"); // OK
getProp(user, "name"); // OK
// getProp(user, "email"); // エラーになるように
// Q7: Partialを使って、全プロパティをオプショナルにした型を作ってください
console.log("Q7");
var u = { name: "Bob" }; // OK
console.log(u);
var readonly_user = {
    name: "Alice",
    age: 30
};
var preview_user = {
    name: "Charlie",
    // age: 30 // ← エラーになるように！
};
// Q10: Record を使ってキー付きオブジェクトを作る
var scores = {
    "user1": 80,
    "user2": 95,
    // "user3": "high" // ← エラーになるように！
};
// Q11: keyof と typeof を使ってリテラルキーだけ受け付ける関数
var labels = {
    home: "Home",
    about: "About Us",
    contact: "Contact"
};
function getLabel(key) {
    return labels[key];
}
getLabel("home"); // OK
// getLabel("privacy"); // ← エラーになるように！
var fruits = {
    apple: 100,
    banana: 200,
    orange: 300,
};
function getPrice(fruit) {
    return fruits[fruit];
}
getPrice("apple"); // OK
getPrice("banana"); // OK
// getPrice("mango");   // ← エラーにする！
