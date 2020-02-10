"use strict";

// 【書き方①(swich文)】
{
  // const btn = document.getElementById("btn");
  // btn.addEventListener("click", () => {
  //   const n = Math.floor(Math.random() * 5);
  //   // btn.textContent = n;

  //   switch (n) {
  //     case 0:
  //       btn.textContent = "大吉";
  //       break;                          // 忘れないように!
  //     case 1:
  //       btn.textContent = "中吉";
  //       break;
  //     case 2:
  //       btn.textContent = "小吉";
  //       break;
  //     case 3:
  //       btn.textContent = "吉";
  //       break;
  //     case 4:
  //       btn.textContent = "凶";
  //       break;
  //   }
  // });
}

// 【配列を用いた場合】
{
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    // const results = ["大吉", "中吉", "小吉", "吉", "凶"];

    // 【定数を使った書き方】
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];

    // 【定数を使わない書き方】
    // btn.textContent = results[Math.floor(Math.random() * results.length)];

    // 【確率の操作(一例)】
    const n = Math.random();
    if (n < 0.05) { 
      btn.textContent = "大吉";   // 5%
      // console.log("click")
    } else if (n < 0.2) {
      btn.textContent = "中吉";   // 15%  
      // console.log("OK")
    } else {
      btn.textContent = "凶";     // 80%
      // console.log("good")
    }
  });
  // < Memo >
    // 配列の際、要素の数が増えたときは「lengthプロパティ」を用いると便利。
}

// < Memo >
  // 【乱数】
    // Math.random()・・0〜1(1は含まれない)乱数の生成
    // Math.floor()・・小数点以下の切り捨て
    // 例)
      // Math.random() * 3 ・・・0〜3(3は含めない)乱数が作成される
      // Math.floor(Math.random() * 3)・・0〜2のランダム整数の作成
      // Math.floor(Math.random() * (n + 1))・・0〜nまでのランダム整数の生成
      // min + Math.floor(Math.random() * (max + 1 -min))・・minからmaxまでのランダム整数の生成。