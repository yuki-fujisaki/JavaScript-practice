// 変数の書き方
let hello = 'Hello World';
alert(hello);

// 文字列を結合する
alert('Hello' + 'World');

let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);

// 条件分岐
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

// 繰り返し処理
let max = 100;
let num1 = 1;
let count = 0;

while(num1 < max){
  num1 = num1 * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

let i;
let num2 = 0;

for(i = 1; i < 11; i++){
  num2 = num2 + i;
}

alert('1から10まで足し算した結果は' + num2 + 'です');