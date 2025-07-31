export {};
// 1.
// 出題：以下の仕様を満たす Rectangle クラスを作成してください。

// 📝 要求仕様
// 横 (width: number)、縦 (height: number) を持つ

// getArea() で面積を返す

// isSquare() で正方形かどうかを boolean で返す

// class Rectangle {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea(): number {
//     return this.width * this.height;
//   }

//   isSquare(): boolean {
//     return this.width === this.height
//   }
// }

// let rectangle = new Rectangle(4, 4)
// console.log(rectangle.getArea())
// console.log(rectangle.isSquare())

// 2.
// 出題：以下の仕様を満たす Shape インターフェースと Circle クラスを作成してください。

// 📝 要求仕様
// Shape インターフェースには getArea(): number メソッドがあること

// Circle クラスは Shape を実装する

// Circle は radius: number を持ち、getArea() で円の面積を返すこと（円周率は Math.PI を使ってOK）

interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  isSquare(): boolean {
    return this.width === this.height
  }
}

class Circle implements Shape {
  constructor(public radius: number) {}

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const shapes: Shape[] = [
  new Rectangle(4,5),
  new Circle(8),
  {
    getArea() {
      return 3;
    }
  }
]

for(const shape of shapes) {
  console.log(shape.getArea())
}