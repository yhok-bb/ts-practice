export {};
// compile1
// const counter = {
//   value: 0,
//   increment(this: typeof counter) {
//     this.value++;
//   }
// };

// counter.increment();
// console.log(counter.value); // => 1

type Counter = { value: number, increment(this: Counter): void};

const counter: Counter = {
  value: 0,
  increment(this: typeof counter) {
    this.value++;
  }
}