// jsから入力欄にアクセスできるようになる
const taskInput = document.getElementById('taskInput');
// id="addTaskBtn"の<button>要素を取得
const addTaskBtn = document.getElementById('addTaskBtn');
// タスク一覧を表示する<ul id="taskList">"要素を取得
const taskList = document.getElementById('taskList');
// 追加ボタン学理kkされたら中の処理を実行
addTaskBtn.addEventListener('click', () => {
    // 入力欄に書かれた百地をtaskTextに代入
    const taskText = taskInput.value;
    // もし何も入力されなければ処理を中断
    if (taskText === '') return;

    // 新しい<li>を作って、入力されたテキストを入れる
    const li = document.createElement('li');
    li.textContent = taskText;

    // 削除ボタン
    // <button>要素を作り、表示文字を削除に設定
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除'
    // 削除ボタンがクリックされたら、対応する<li>を削除
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    
    // 作ったボタンを<li>に追加し、それをulに追加
    // これで画面にタスクが表示される
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ''; // 入力をクリア
})