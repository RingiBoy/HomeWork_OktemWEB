// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//

// let hideTextId = document.querySelector('#text');
// console.log(hideTextId);
// let getForms = document.forms.nameForm1;
// let but1 = getForms.click;   // название кнопки из параметра :name:
//
// console.log(but1);
// but1.onclick = () => {
//     hideTextId.style.display = 'none'
// };


//
// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

//let getForms = document.forms.nameForm1;
// let getBut2 = getForms.hideItSelf;
//
// console.log(getBut2);
// getBut2.onclick = () => {
//     getBut2.style.display = 'none';

// };


//


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let Forms = document.forms.nameForm1;
// let getBut2 = Forms.hideItSelf
// let getInput= Forms.input1;
// console.log(getInput.value);

// getBut2.onclick =()=>{
//     if ((Number(getInput.value))<18){
//         console.log(getInput.value);
//         alert("so small age, sorry")
//     }
//     else {
//         alert('you wallcome')
//     }
// }
// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementById('mainMenu')
// let sub = document.getElementById('subMenu')
// console.log(menu);
// console.log(sub);
// menu.onclick=()=>{
// if (sub.style.display ==='none'){
//     sub.style.display ='block'
// }
//  else {
//     sub.style.display ='none'
// }
// };
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

// arr = [{title: 'lorem4', body: 'lorem ipsum dolo sit ameti'}, {
//     title: 'lorem6',
//     body: 'lorem ipsum dolo sit ameti'
// }, {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'}, {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'}]
//
//
// //     Вывести список комментариев в документ, каждый в своем блоке.
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// arr.forEach(value => {
//     let conteiner = document.getElementById('commentCont');
//     const title = document.createElement('div');
//     const comment = document.createElement('div');
//     const button = document.createElement("button");
//     console.log(value);
//     title.innerText = value.title;
//     comment.innerText = value.body;
//     button.innerText = 'press me';
//     button.onclick = () => {
//         comment.style.display === 'none'
//             ? comment.style.display = 'block'
//             : comment.style.display = 'none'
//     }
//
//
//     conteiner.appendChild(title);
//     conteiner.appendChild(comment);
//     conteiner.appendChild(button);
//      });


//
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.


// const formText = document.getElementById('text');
// const formText2=document.getElementById('text2');
// const btn = document.getElementById('btn');
// btn.innerText='enter'
//
//
// btn.onclick=()=>{
//     console.log(formText.value);
//     console.log(formText2.value);
//
// }

//
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// const xxx = document.getElementById('tableTeg')
// function table(str, yach, teg) {
//     const table = document.createElement('table');
// // debugger
//     for (let i = 0; i < str; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < yach; j++) {
//             const td = document.createElement('td');
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//
//     teg.appendChild(table)
//
//     document.body.appendChild(teg)
//
// };
//
// table(2,3, xxx);
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
const xxx = document.getElementById('tableTeg')
function table(str, yach, teg) {
    const table = document.createElement('table');

    for (let i = 0; i < str; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < yach; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    teg.appendChild(table)

    document.body.appendChild(teg)

};

const colStrok = document.getElementById('colStrok');
const colYacheek=document.getElementById('colYacheek')
const button = document.getElementById('enter');
button.onclick=()=> {
    table(colStrok.value, colYacheek.value, xxx);
}


















//
//
//
// (Додатковачастина для завдання)
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан