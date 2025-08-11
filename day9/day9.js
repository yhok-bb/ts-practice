var counter = function (count) {
    if (count === void 0) { count = 0; }
    return function (adds) {
        if (adds === void 0) { adds = 1; }
        return count += adds;
    };
};
var increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());
