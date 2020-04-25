
// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//ДЗ:
// function  tegHTML(name, description, attributesHTML=[{name, descr },{name,descr }])
// {
//     this.name=name;
//     this.description=description;
//     this.attributesHTML=attributesHTML;
//
// }
//
// let tegA = new tegHTML('a','Тег a является одним из важных элементов HTML и предназначен для создания ссылок.', [{name:'href', desct:'Задает адрес документа, на который следует перейти.'}, {name:'target', desct:'Имя окна или фрейма, куда браузер будет загружать документ.'}]);
//
// let tegDiv = new tegHTML('div','Элемент div является блочным элементом и предназначен для выделения фрагмента ',[{name:'align' ,desct:'Задает выравнивание содержимого тега'},{name:"title", desct:'Добавляет всплывающую подсказку к содержимому.'}]);
//
// let tegH1 = new tegHTML('h1',"HTML предлагает шесть заголовков разного уровня", [{name:"align", desct:"Определяет выравнивание заголовка."},{name:'', desct:''}]);
//
// let tegSpan = new tegHTML('span', 'предназначен для определения строчных элементов документа. ', [{name:'style', desct:"Применяется для определения стиля элемента с помощью правил CSS."},{name:'dir', desct:"Задает направление и отображение текста — слева направо или справа налево."}]);
// console.log(tegA);
// console.log(tegDiv);
// console.log(tegH1);
// console.log(tegSpan)

//и другие теги с описаниями их атрибутов;


//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

// class HtmlTeg {
//     constructor(name, declaration, attributes) {
//
//
//         this.name = name;
//         this.description = description;
//         this.attributes = attributes;
//     }
// }
//
// let name = 'a';
// let description='Тег a является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attributes=[{name: "href", description: 'Задает адрес документа, на который следует перейти.'},{name:'target', description:'Имя окна или фрейма, куда браузер будет загружать документ.'}];
//
//
// let code = new HtmlTeg(name, description,attributes);
//
// console.log(code);
//
// let x='div';
// let y= 'Block description';
// let at=[{name:'align' ,desct:'Задает выравнивание содержимого тега'},{name:"title", desct:'Добавляет всплывающую подсказку к содержимому.'}]
//
// let divka = new HtmlTeg(x, y, at);
// console.log(divka);

//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// class Car {
//     constructor(model, madeIn, year, maxSpeed, v3) {
//         this.model = model;
//         this.madeIn= madeIn;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.v3 = v3
//        }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info(){
//         console.log(`${this.model},${this.madeIn},${this.year},${this.v3}`);
//     }
//     increaseMaxSpeed (newSpeed){
//
//         this.maxSpeed=this.maxSpeed+newSpeed;
//         console.log(`максимальная скорость теперь ${this.maxSpeed}`)
//     }
//     addDriver (driver){
//         this.drive=driver;
//
//     }
// }
// let tavria = new Car("tavria", "Ukraine",1990, 350, "6l" )
// tavria.drive();
// tavria.increaseMaxSpeed(10);
// tavria.addDriver({name:"Serg", age:"40"});
// console.log(tavria);


//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================


// class Popelushka{
//     constructor(name, age,foot) {
//         this.name=name;
//         this.age=age;
//         this.foot=foot;
//     }
//  }
//
//  let sveta= new Popelushka('svetka',18,45);
//
// let lesya=new Popelushka('lesya',45,30);
// let klara=new Popelushka('klara',80,29);
// let ukrala=new Popelushka('ukrala',19,35);
// let koralu=new Popelushka('koralu',18,36);
// let tochka=new Popelushka('tochka',22,39);
// let krapka=new Popelushka('krapka',15,37);
// let arr = [sveta, lesya, klara, ukrala, koralu, tochka, krapka];
//
//
// class Pruns{
//     constructor(name,age,findBoots) {
//         this.name= name;
//         this.age=age;
//         this.findBoots=findBoots;
//     }
// }
// let Alex = new Pruns("Alex", 20, 35)
//
// for (const answer in arr) {
//     // console.log(arr[answer]);
//     if (arr[answer].foot === Alex.findBoots){
//         document.write(`попелюшка нашщлась и ее имя ${arr[answer].name}<br>`)
//     }
// }


//
//
// ==============================================
// --створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
class Popelushka {
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}

let sveta = new Popelushka('svetka', 18, 45);

let lesya = new Popelushka('lesya', 45, 30);
let klara = new Popelushka('klara', 30, 29);
let ukrala = new Popelushka('ukrala', 19, 35);
let koralu = new Popelushka('koralu', 18, 36);
let tochka = new Popelushka('tochka', 22, 39);
let krapka = new Popelushka('krapka', 15, 37);


class Pruns extends Popelushka {
    constructor(name, age, findBoots) {
        super(name, age);
        this.findBoots = findBoots;
    }

    findPopelushka(arr) {
        for (const answer in arr) {
            // console.log(arr[answer]);
            if (arr[answer].foot === this.findBoots) {
                document.write(`попелюшка нашлась и ее имя ${arr[answer].name}<br>`)
            }
        }
    }
}

let Alex = new Pruns("Alex", 20, 37)
let array = [sveta, lesya, klara, ukrala, koralu, tochka, krapka];
Alex.findPopelushka(array);


let serg = new Pruns("Serj", 33, 29);
serg.findPopelushka(array)