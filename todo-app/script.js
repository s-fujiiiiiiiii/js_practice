const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// -----JSONファイル読み込みvar----
// async function loadTodos() {
//     try {
//         const response = await fetch('todos.json');
//         if (!response.ok) throw new Error('JSONファイルが見つかりません');

//         const todos = await response.json();
//         if (!Array.isArray(todos)) {
//             throw new Error('JSONの形式が不正です');
//         }

//         todos.forEach(todo => {
//             addTodoFromText(todo.text);
//         });
//     } catch (error) {
//         console.error('JSON読み込みエラー:', error);
//         alert('ToDoの読み込みに失敗しました');
//     }
// }


async function loadTodos() {
    try {
        const stored = localStorage.getItem('todos');
        if (!stored) return;

        const todos = JSON.parse(stored);
        if (!Array.isArray(todos)) {
            throw new Error('保存されたデータ形式が不正です');
        }

        todos.forEach(todo => {
            addTodoFromText(todo.text);
        });
    }catch (error) {
        console.error('ToDoの読み込みに失敗', error);
        alert('ToDoの読み込みに失敗しました');
    }
}

function addTodoFromText(text) {
    try {
    const li = document.createElement('li');
    li.textContent = text;

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = '削除';
    delBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        todoList.removeChild(li);
        saveTodos();
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);

} catch (error) {
    console.error('JSONからToDo追加時のエラー', error);
}
    saveTodos();
}

//ページ読み込み時に呼び出す
window.addEventListener('DOMContentLoaded', loadTodos);



//ToDOを追加する関数
function addTodo() {
    try {
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

    } catch (error) {
        console.error('ToDo追加時のエラー:', error);
        alert('ToDoの追加に失敗しました');
    }
    saveTodos();
};

// ボタンをクリックしたらaddTodo関数を呼び出す
addBtn.addEventListener('click', addTodo);

function saveTodos() {
    // ulの中のliをすべて取り出してtextだけを配列にする
    const todos = [];
    document.querySelectorAll('#todoList li').forEach(li => {
        const text = li.firstChild.textContent; // 最初のテキストだけを取得("削除"ボタンを除く)
        todos.push({text: text});
    });
    localStorage.setItem('todos', JSON.stringify(todos)); // JSON文字列にして保存
}
