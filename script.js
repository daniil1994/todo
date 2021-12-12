let profile = document.querySelector('.menu-profile')
let selectmenu = document.querySelector('.select-menu')
let hidden = document.querySelector('.hidden')
let openmenu = document.querySelector('.avatar')
let openmenutask = document.querySelector('.menutask')
let summtask = document.querySelectorAll('.li-task')
let fulltask = document.querySelectorAll('.fulltask')
let list = document.querySelector('.ul-task')
let form = document.querySelector('.input-task')
let input = document.querySelector('.todo-inport')
// Меню статуса (new,progress.closed)
let openstatus = document.querySelector('.status')
let statusmenu = document.querySelector('.status-select')

//Кол-во тасок
document.getElementById("summatasik").innerHTML = summtask.length;

//Клик на профиль
openmenu.onclick = function () {
    profile.classList.toggle('hidden');
}
//Клик на меню (удалить таску)
openmenutask.onclick = function () {
  selectmenu.classList.toggle('hidden');
}

//Клик статус таски
openstatus.onclick = function () {
  statusmenu.classList.toggle('hidden');
}

//Обработка закрытия меню


form.onsubmit = function (evt) {
  evt.preventDefault();

  // Создаём новую задачу - элемент li
  let newTask = document.createElement('li');
  newTask.classList.add('li-task');
  // Берём текст задачи из поля ввода input

  newTask.textContent = input.value;
  

  // Добавляем новую задачу в конец списка list

  list.append(newTask);

  // Очищаем поле ввода input
  input.value = '';
};



