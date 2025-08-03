"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// generics
// function copy<T extends { name: string }>(value: T): T {
//   return value;
// }
// console.log(copy({ name: "quile" }))
// keyof
function copy(value, key) {
    return value[key];
}
console.log(copy({ name: "quile", age: 21 }, "age"));
