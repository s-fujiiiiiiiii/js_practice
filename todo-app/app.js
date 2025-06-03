const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // 削除ボタン
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除'
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ''; // 入力をクリア
})