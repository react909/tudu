document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('todo-form');
    let input = document.getElementById('todo-input');
    let todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Предотвращаем отправку формы

        let taskText = input.value.trim();
        if (taskText === '') return; // Не добавляем пустые задачи

        // Создаем новый элемент списка
        let li = document.createElement('li');
        li.textContent = taskText;

        // Обработчик события для выделения элемента по клику
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        todoList.appendChild(li);

        // Очищаем поле ввода
        input.value = '';
    });
});