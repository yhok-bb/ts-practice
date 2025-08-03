export {};
// generics
// function copy<T extends { name: string }>(value: T): T {
//   return value;
// }

// console.log(copy({ name: "quile" }))

// keyof
// function copy<T extends { name: string, age: number }, U extends keyof T>(value: T, key: U): T[U] {
//   return value[key];
// }

// console.log(copy({ name: "quile", age: 21 }, "name"))

// Q1: この変数 a の型は何になりますか？
// 明示的に型指定して書き直してみよう
// let a = [1, 2, 3];
let a: number[] = [1,2,3]
let b: Array<number> = [1,2,3]

// Q2: 引数が "left" または "right" のときだけ動作する関数を書いてください
function move(direction: "left" | "right") {
  console.log(`Moving ${direction}`);
}

move("left"); // OK
// move("up");   // エラーになるように！

// Q3: 引数が string か number のときで処理を分ける関数を書いてください
function print(value: string | number) {
  // 型に応じて振る舞いを変える
  // stringならlengthを出力、numberなら2倍して出力
  if(typeof value === "string") {
    console.log(value.length);
  } else {
    console.log(value * 2);
  }

  // これ(in)は使えない
  // 1. プリミティブ型にinの絞り込みはできない(常にfalseになる)
  // 2. in演算子はオブジェクトのプロパティをチェックする。プリミティブ型はオブジェクトではない
  // プリミティブ型の実行時、内部では一時的にラッピング（Boxing）が起こる
  // 1. new String("hello").toUpperCase()
  // 2. 結果を返す
  // 3. ラッパーオブジェクトを破棄

  // if("toUpperCase" in value) {
  //   console.log(value.length)
  // } else {
  //   console.log(value * 2);
  // }

  // asはTSに嘘をつくのであって、実際の値が変わるわけではない
  // numberにlengthを呼び出そうとしたら普通にエラー
  // 結局typeofで良さそう
  
  // if(value as string) {
  //   console.log(value.length)
  // } else {
  //   console.log(value * 2);
  // }
}

