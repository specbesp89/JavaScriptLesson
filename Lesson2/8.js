//8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow == 1)
        return val;
    else
        return val * power(val, --pow);

}

console.log(power(2, 4))