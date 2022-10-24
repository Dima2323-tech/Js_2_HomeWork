// модифікувати калькулятор за допомогою if  при спробі поділити на 0 виводити alert
let firstValue = parseInt(prompt("Введите первое Значение"))
let operation = prompt("Выберите операцию")
let secondValue = parseInt(prompt("Введите Второе Значение"))

if (operation == "+"){
    console.log(firstValue + secondValue)
}
if (operation == "-"){
    console.log(firstValue - secondValue)
}
if (operation == "*"){
    console.log(firstValue * secondValue)
}
if (operation == "/"){
    console.log(firstValue / secondValue)
}
if (secondValue == 0 && operation == "/"){
    alert("Делить на ноль нельзя")
}


// // Створити массив з днями неділі ( Понеділок, вівторок ... )  за допомогою циклу перебрати значення массиву, якщо значення вівторок чи четверг вивсести алер в 19 00 урок
let arrayDays = ['Понедельник' , 'Вторник' , 'Среда' , 'Четверг' , 'Пятница' , 'Суббота' ,'Воскресение'];

for (let i = 0; i < arrayDays.length; i++){
    if (i == 1){
        alert( `${arrayDays[1]} - Работаем в 19 00 урок`)
    }
    if ( i == 3){
        alert( `${arrayDays[3]} - Работаем в 19 00 урок`)
    }
    else if(i == 0){
        alert(`${arrayDays[0]} - Не Работаем урока нету`)
    }
    else if(i == 2){
        alert(`${arrayDays[2]} - Не Работаем урока нету`)
    }
    else if(i == 4){
        alert(`${arrayDays[4]} - Не Работаем урока нету`)
    }
    else if(i == 5){
        alert(`${arrayDays[5]} - Не Работаем урока нету`)
    }
    else if(i == 6){
        alert(`${arrayDays[6]}  - Не Работаем урока нету`)
    }
}
console.log(arrayDays)

// - створити змінну discount ( вказати значення розміру знижки ),
// створити значення яке вводить користвувач. І в змінній price за допогою тернарного оператора визначити ціну з знижкою якщо кількість товарів більше 5 і якщо менше 5

let discountOver = 10;
let discountBefore = 5;
let productsValue = prompt('Введите количество покапаемого товара')
let priceWODiscount = 500;
let productValueSum = productsValue * priceWODiscount;
let price = productsValue >= 5 ? productValueSum / 100 * discountOver : productValueSum / 100 * discountBefore

if  (productsValue >= 5){
    alert(`Так как вы купили больше 5 товаров на сумму ${productValueSum} , вы получаете скидку ${discountOver}% , сумма скидки составляет ${price} , сумма к оплате ${productValueSum - price}`)
}
else if (productsValue < 5){
    alert(`Так как вы купили меньше 5 товаров на сумму ${productValueSum} , вы получаете скидку ${discountBefore}% , сумма скидки составляет ${price} , сумма к оплате ${productValueSum - price}`)
}

// - використовуючи цикл виведіть суму чисел між А і В з умовоб що A<B
let aValue = parseInt(prompt("Введите А"))
let bValue = parseInt(prompt("Введите Б"))
let sum = aValue + bValue
while (aValue < bValue){
    do{
        console.log(aValue , "+" , bValue , "=" , sum);
        aValue++
        sum++
    }while (aValue <= bValue)
}
while (aValue > bValue){
    do{
        console.log(aValue , "+" , bValue , "=" , "none");
        bValue++
    }while (aValue > bValue)
}

// - напишіть змінні які питають логін та пароль з prompt  якщо логін admin і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" якщо ні то виводити "Пароль логін не вірні"

let login = prompt("Введіть Логін");
let password = parseInt(prompt("Введіть Пароль"));

if (login == "admin" && password != 12345){
    console.log("Логін вірний пароль не вірний")
}
else if (login != "admin" && password == 12345){
    console.log("Пароль вірний логін не вірний")
}
else if (login == "admin" && password == 12345){
    console.log("Логін пароль вірний")
}
else {
    console.log("Логін пароль не вірний")
}

