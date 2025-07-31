export {};
// compile1
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Pochi");
d.speak();

// 出題：以下の仕様を満たすクラスを TypeScript で実装してください。

// 📝 要求仕様
// 名前と年齢を持つ Person クラスを作成する

// introduce() メソッドで「こんにちは、私は〇〇です。〇歳です。」と表示される

// 名前や年齢はコンストラクタで渡す

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `こんにちは、私は${this.name}です。${this.age}歳です`
  }
}

let p = new Person("Alice", 22)
console.log(p.introduce())

// 出題：以下の仕様を満たすクラスを TypeScript で実装してください。

// 📝 要求仕様
// Book クラスを作成

// タイトル (title: string)、著者 (author: string)、出版年 (publishedYear: number) を持つ

// getSummary() メソッドで「『タイトル』（著者, 出版年）」という形式の文字列を返す

// readonly を使って著者を変更不可にする

class Book {
  title: string;
  readonly author: string;
  publishedYear: number

  constructor(title: string, author: string, publishedYear: number) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  }

  getSummary() {
    return `『${this.title}』（${this.author}, ${this.publishedYear}）`
  }
}

let book = new Book("ようこそ実力至上主義の教室へ", "衣笠彰悟", 2017)
// book.title = "setできる"
// book.name = "setできない"
console.log(book.getSummary())