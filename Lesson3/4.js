//4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

'use strict';
function pyramid(n){
    for(var i = 1; i <= n; i ++) {
    console.log( Array(i).fill('x') );
}
}


pyramid(20);


