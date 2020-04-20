// - создать массив с 20 числами.


//  const arr=[1, 5, 88, 4, 66, 7, 10, 3, -2, 2,100,6,8,4,3,1,65,400,6,884];

// -- при помощи метода sort и колбека  отсортировать массив.

// arr.sort(function(a, b){
//     return b-a;
// });
// console.log(arr);


// -- при помощи filter получить числа кратные 3

// let filt=arr.filter(function(num){
//     if((num%3===0)&& (num!==0)){
//         return true;
//     }
//     else{
//         false;
//     }

// });
// console.log(filt)


// -- при помощи filter получить числа кратные 10
// let filt10 = arr.filter(function(num){
//     if ((num%10===0)&&(num!==0)){
//         return true;
//     }
//     else{return false};
// });
// console.log(filt10);

// console.log(arr);


// -- перебрать (проитерировать) массив при помощи foreach()
// const arr=[1, 5, 88, 4, 66, 7, 10, 3, -2, 2,100,6,8,4,3,1,65,400,6,884];

// arr.forEach
// (function(item, i, arr)
// {
//      console.log(`Элемент массива: ${item}, индекс:${i}`);
// }
// );


// class Obj {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;}
//     hello () {
//         document.write(`привет ${this.name}`);
//     }
// }
//
// const o1= new Obj('Dima', 22);
// const o2= new Obj('Tonya', 221);
// const o3= new Obj('Olga', 212);
// const o4= new Obj('Sveta', 202);
// const o5= new Obj('Marina', 22);
// const o6= new Obj('Oksana', 2);
// const o7= new Obj('Aliona', 12);
//
// let garem = [o1,o2,o3,o4,o5,o6,o7];
// console.log(garem)
//
//
// for (const iterator of garem) {
//     console.log(iterator)
// }

// garem.forEach(function(person, index, garem)

// {
//      console.log(person, index);


// });

// o6.hello()


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// const arr = [1, 5, 88, 4, 66, 7, 10, 3, -2, 2, 100, 6, 8, 4, 3, 1, 65, 400, 6, 884];
//
//
// let rrr = arr.map((value, index, arr) => {
//         value = value * 3;
//         console.log(value);
//         return value
//
//
//     }
// );
// console.log(rrr);


// - создать массив со словами на 15-20 элементов.

// str = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'aa22', 'st16', 'B']
// // -- отсортировать его по алфавиту в восходящем порядке.
// let sort1 = str.sort();
// console.log(str);


// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sort2 = str.sort(function (a,b) {
// if  (b<a){
//     return -1;
// }
// else {return 1};
// });
//  console.log(sort2);

// str = ['aida', 'pad', 'chrom', 'debian', 'esyway', 'firefox', 'joomla', 'sony'];
// // -- отфильтровать слова длиной менее 4х символов
// let four = str.filter(function (elem, index) {
//     return elem.length < 4;
// });
// console.log(four);
// console.log(str);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let newString = str.map(function (value,index,array) {
//     // console.log(value);
//     return value+"!";
//
//
//
// })
// console.log(newString);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {
//     name: 'anya',
//     age: 31,
//     status: false
// }, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {
//     name: 'masha',
//     age: 30,
//     status: true
// }, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true}];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let newArr = users.sort((a,b)=>{
//     return a.age-b.age;
//
// });
//
//
//  console.log(newArr);
//  console.log(users);


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let newArr = users.sort((a,b)=>{
//     return a.name.length-b.name.length;
// });
//  console.log(newArr);


// // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let JsonArr = JSON.parse(JSON.stringify(users));
// let newArr = JsonArr.map((user, index) => {
//
//     user.id = index;
//      return user;
//
//
// });
//  console.log(newArr);




// - відсортувати його за індентифікатором

// let sortId = newArr.sort((a, b) => {
//     return a-b;
//
// });




// console.log(sortId);



// -- наисать функцию калькулятора с 2мя числами и колбеком
function calc(a, b, callFunction) {
        return callFunction(a,b);

};


a=6;
b=2;
let result= calc(a,b,function (a,b) {
    return a*b;

});
console.log(result);



// -- наисать функцию калькулятора с 3мя числами и колбеком


function calc3(a,b,c,callback) {
    return callback(a,b,c);
};

console.log(calc3);
let resultCalc3 = calc3(4,11,2, function (a,b,c) {
    return (a*b)/c;

});
console.log(resultCalc3);
