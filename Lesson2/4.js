//4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

let a = prompt('Введите число от 0 до 15 для перевода в текст')

function valueFunc(a) {
        switch (a) {
            case 0: return 'ноль';
            case 1: return 'один';
            case 2: return 'два';
            case 3: return 'три';
            case 4: return 'четыре';
            case 5: return 'пять';
            case 6: return 'шесть';
            case 7: return 'семь';
            case 8: return 'восемь';
            case 9: return 'девять';
            case 10: return 'десять';
            case 11: return 'одинадцать';
            case 12: return 'двенадцать';
            case 13: return 'тринадцать';
            case 14: return 'четырнадцать';
            case 15: return 'пятьнадцать';
            default: return  'Введено не корректное значение';

        }
    }

console.log(valueFunc(parseInt(a)));