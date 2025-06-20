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

    // クリックで完了状態を切り替える(取り消し線)
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // 削除ボタン作成
    const delBtn = document.createElement('button');
    delBtn.textContent = '削除';
    delBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // liのクリックイベントを防ぐ
        todoList.removeChild(li);
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);


    // リストに追加
    todoList.appendChild(li);

    //入力欄リセット
    input.value = '';
};

// ボタンをクリックしたらaddTodo関数を呼び出す
addBtn.addEventListener('click', addTodo);