"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.message = function (message) {
        console.log(message);
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getColor = function () {
        return this.color;
    };
    Rectangle.prototype.message = function (message) {
        console.log(message);
    };
    return Rectangle;
}());
function isColoredShape(shape) {
    return typeof shape.getColor === 'function';
}
var shapes = [
    new Rectangle(3, 4, "red"),
    new Circle(3),
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    if (isColoredShape(shape)) {
        console.log(shape.getColor());
    }
    else {
        console.log('Not Color');
    }
}
var re = new Rectangle(5, 6, 'blue');
console.log(re.message('Hello'));
