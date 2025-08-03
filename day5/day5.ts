export {};
// 1. 
// 次の要件を満たす TypeScript コードを書いてください：


// 要件：
// Shape インターフェースを継承した ColoredShape インターフェースを定義してください。

// ColoredShape には getColor(): string メソッドを追加してください。

// Rectangle クラスに color プロパティと getColor() メソッドを実装し、ColoredShape を実装するようにしてください。

// Shape 型の配列 shapes に Rectangle と Circle を含めてください。

// ループで shape が ColoredShape かどうかを判定し、getColor() を呼び出してください（TypeScriptの型ガードを使う）。

interface Shape {
  getArea(): number;
}

interface ColoredShape extends Shape {
  getColor(): string;
  greetMessage?(): void;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  greetMessage(message?: string) {
    console.log(message)
  }
}

class Rectangle implements ColoredShape {
  constructor(public width: number, public height: number, public color: string, public message?: string) {}
  getArea(): number {
    return this.width * this.height;
  }

  getColor(): string {
    return this.color
  }

  greetMessage(message?: string) {
    console.log(message)
  }
}

function isColoredShape(shape: Shape): shape is ColoredShape {
  return typeof (shape as any).getColor === 'function'
}

const shapes: Shape[] = [
  new Rectangle(3, 4, "red"),
  new Circle(3),
]

for(const shape of shapes) {
  if(isColoredShape(shape)) {
    console.log(shape.getColor());
  } else {
    console.log('Not Color')
  }
}

let re = new Rectangle(5,6,'blue')
console.log(re.greetMessage('Hello'))

// const input = document.getElementById('input')!;
// input.value

// indexSignature
interface Designer {
  name: string;
  [index:string]: string;
}

const designer: Designer = {
  name: "quill",
  role: "software ennjineer",
  1: "1",
}