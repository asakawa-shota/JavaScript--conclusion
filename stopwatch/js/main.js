"use strict";
{
  // 全ての要素を取得する
  const timer = document.getElementById("timer"); 
  const start = document.getElementById("start"); 
  const stop = document.getElementById("stop"); 
  const reset = document.getElementById("reset"); 

  let startTime;                            // 再代入していくためletを用いる 

  function countUP() {
    console.log(Date.now() - startTime);    // 現在の現在の時刻から start ボタンを押したときの時刻である startTime を引いてあげれば、 startTime からの経過ミリ秒がわかる
    setTimeout(() => {
      countUP();
    }, 10);
  }

  // スタートbtnにクリックイベントを付与
  start.addEventListener("click", () => {
    startTime = Date.now();                 // 現在時刻の取得
    countUP(); 
  });
}