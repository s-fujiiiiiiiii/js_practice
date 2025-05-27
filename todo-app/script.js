function addTask() {
    const input = document.getElementById("taskInput");// 入力ボックスを取得
    const task = input.value.trim();// 入力内yを取得、前後の空白を削除
    if (task === "") return;// 何も入力しなければ何もしない

    const li = document.createElement("li");// 新しいli要素を作成
    li.textContent = task;// 入力した内容をliに表示

    const deleteBtn = document.createElement("button");// 削除ボタン作成
    deleteBtn.textContent = "削除";// ボタンの文字
    deleteBtn.onclick = () => li.remove();// 押されたそのliを削除

    li.appendChild(deleteBtn);// liの中に削除ボタンを入れる
    document.getElementById("todoList").appendChild(li);// リストにliを追加

    input.value = "";// 入力ボックスを空にする
}