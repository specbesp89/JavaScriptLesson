// 2.	Продолжить работу с интернет-магазином:
// a.	В прошлом домашнем задании вы реализовали корзину на базе массивов.
// Какими объектами можно заменить их элементы?
// b.	Реализуйте такие объекты.
// c.	Перенести функционал подсчета корзины на объектно-ориентированную базу.


let objBasket =  [{name:'Монитор', price:20000, count: 2}, {name:'Системный блок', price:55000, count: 1},{name:'мышка', price:300, count: 1}];

function countBasketPrice(obj){
    let sum = 0
    let countGoods = 0
    for (let i = 0; i <obj.length; i++) {
        sum += obj[i].price * obj[i].count;
        countGoods +=  obj[i].count
    }return 'Сумма товаров в карзине: ' + sum + 'Количество товара: ' + countGoods;
}
console.log(countBasketPrice(objBasket));

