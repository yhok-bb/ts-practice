// compile1
// const counter = {
//   value: 0,
//   increment(this: typeof counter) {
//     this.value++;
//   }
// };
var counter = {
    value: 0,
    increment: function () {
        this.value++;
    }
};
