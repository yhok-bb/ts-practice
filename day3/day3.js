"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// compile1
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " barks."));
    };
    return Dog;
}(Animal));
var d = new Dog("Pochi");
d.speak();
// 出題：以下の仕様を満たすクラスを TypeScript で実装してください。
// 📝 要求仕様
// 名前と年齢を持つ Person クラスを作成する
// introduce() メソッドで「こんにちは、私は〇〇です。〇歳です。」と表示される
// 名前や年齢はコンストラクタで渡す
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "\u3053\u3093\u306B\u3061\u306F\u3001\u79C1\u306F".concat(this.name, "\u3067\u3059\u3002").concat(this.age, "\u6B73\u3067\u3059");
    };
    return Person;
}());
var p = new Person("Alice", 22);
console.log(p.introduce());
// 出題：以下の仕様を満たすクラスを TypeScript で実装してください。
// 📝 要求仕様
// Book クラスを作成
// タイトル (title: string)、著者 (author: string)、出版年 (publishedYear: number) を持つ
// getSummary() メソッドで「『タイトル』（著者, 出版年）」という形式の文字列を返す
// readonly を使って著者を変更不可にする
var Book = /** @class */ (function () {
    function Book(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    Book.prototype.getSummary = function () {
        return "\u300E".concat(this.title, "\u300F\uFF08").concat(this.author, ", ").concat(this.publishedYear, "\uFF09\u300D");
    };
    return Book;
}());
var book = new Book("ようこそ実力至上主義の教室へ", "衣笠彰悟", 2017);
book.title = "setできる";
console.log(book.getSummary());
