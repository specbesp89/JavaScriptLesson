//1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект:
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение
// с помощью console.log и вернуть пустой объект.

'use strict';


let value = prompt('введите число от 0 до 999');


function myFunc(value, arr) {
    if (parseInt(value)>=0)
        return constructorObj(value, arr);
    else
        return 'Введено отрицательное значение'
}

function constructorObj(value, arr){

    if (arr.length === 1)
        return {'единицы': parseInt(arr[0]), 'десятки': 0, 'сотни': 0};
    else if (arr.length === 2)
        return {'единицы': parseInt(arr[1]), 'десятки': parseInt(arr[0]), 'сотни': 0};
    else if (arr.length === 3)
        return {'единицы': parseInt(arr[2]), 'десятки': parseInt(arr[1]), 'сотни': parseInt(arr[0])};
    else
       return 'Ошибка, введено большее количество символов';
}

let arr = value.split('');
let obj = myFunc(value, arr);
console.log(obj);






