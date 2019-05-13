// 1. 追加ボタンにclickのイベントを登録する
  let addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', function(){

  // 2. 追加ボタンがクリックされた時の処理を書く
  // 2.1 画面の入力欄、入力値を取得する
  let inputColor = document.getElementById('inputColor');
  let colorCode = inputColor.value;

  // 2.2 新しくdivを作成する
  let newPanel = document.createElement('div');
  
  newPanel.style.backgroundColor = colorCode;
  let box = document.getElementById('box');
  box.insertBefore(newPanel, box.firstChild);
  // 2.3 divの背景色に画面の「2.1」で取得した入力値を設定する
  inputColor.textContent = inputTask.value;

  // 2.4 新しく作成したdivにCSSのクラスを追加する
 newPanel.classList.add('panel');
  // 2.5 div[id=box]を取得する
  document.getElementById("test");
  // 2.6 作成したdivを追加する
  document.getElementById('wrapper').appendChild(div);
  });