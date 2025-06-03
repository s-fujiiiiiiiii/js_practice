const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    // タスク名（スパンで囲む）
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskTextSpan.style.margin = '0 8px';

    // 完了チェックボックス
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            taskTextSpan.style.textDecoration = 'line-through';
        } else {
            taskTextSpan.style.textDecoration = 'none';
        }
    });

    // 削除ボタン
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除'
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    
    li.appendChild(checkbox);
    li.appendChild(taskTextSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ''; // 入力をクリア
})