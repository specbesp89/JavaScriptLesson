//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

function sumFunc(a, b) {
    return a + b
}

function subFunc(a, b) {
    return a - b
}

function mulFunc(a, b) {
    return a * b
}

function divFunc(a, b) {
    return a / b
}

// console.log(sumFunc(2, 2)); // 4
// console.log(subFunc(2, 2)); // 0
// console.log(mulFunc(2, 3)); //6
// console.log(divFunc(2, 2)); // 1


// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function calculator(arg1, arg2, operation) {
    switch (operation){
        case '+': return sumFunc(arg1, arg2);
        case '-': return subFunc(arg1, arg2);
        case '*': return mulFunc(arg1, arg2);
        case '/': return divFunc(arg1, arg2);
       default: return  'Введено не корректное значение оператора';
    }

}

console.log(calculator(2,2, '+')); // 4
console.log(calculator(2,2, '-')); // 0
console.log(calculator(2,3, '*')); //6
console.log(calculator(2,2, '/')); // 1
console.log(calculator(2,2, '//'));//Введено не корректное значение оператора
