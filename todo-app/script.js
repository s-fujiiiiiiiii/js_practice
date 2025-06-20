const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

//ToDOを追加する関数
function addTodo() {
    const text = input.value.trim(); // 入力値を取得(前後の空白を削除)

    // 入力が空ならアラートを出して終了
    if (text === '') {
        alert('ToDoを入力してください')
        return;
    }

    // <li>要素を作って内容をセット
    const li = document.createElement('li')
    li.textContent = text;

    // リストに追加
    todoList.appendChild(li);

    input.value = '';
};

// ボタンをクリックしたらaddTodo関数を呼び出す
addBtn.addEventListener('click', addTodo);