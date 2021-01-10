// 1. Доработать модуль корзины.
// a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
// b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
'use strict';



    const catalog = {
        htmlCatalog: null,
        htmlBasket: null,
        countHTML: null,
        buttonClean: null,
        list: [
            {
                id: 'el_1',
                name: 'ПК Acer Aspire XC-895',
                price: 31299,
            },
            {
                id: 'el_2',
                name: 'Монитор AOC Q27G2U/BK',
                price: 24999,
            },
            {
                id: 'el_3',
                name: 'Клавиатура+мышь Logitech Desktop MK120',
                price: 1499,
            }],

        newlist: [],


        init() {
            this.htmlCatalog = document.getElementById('catalog');
            this.htmlBasket = document.getElementById('basket');
            this.buttonClean = document.getElementById('clean');
            this.countHTML = document.getElementById('count');

            this.render();
            this.eventAddToBasket();
            this.renderBasket();
            this.addEventDropBasket();
            this.count();

        },
        render() {
            this.htmlCatalog.innerHTML = ''
            this.list.forEach(product => {
                this.htmlCatalog.insertAdjacentHTML('beforeend', this.renderCatalog(product))
            })

        },
        renderCatalog(product) {
            return `
                <div>

                    <ul>
                        <li>Наименование: ${product.name}</li>
                        <li>Цена: ${product.price}</li>
                    </ul>
                    <button class="toBasketBtn" data-product_id="${product.id}"> Добавить в корзину </button>

                </div>`;
        },


        eventAddToBasket() {
            this.htmlCatalog.addEventListener('click', event => {
                if (event.target.classList.contains('toBasketBtn')) {
                    return this.add(event.target.dataset.product_id);

                }

            })
        },
        renderBasket() {
            if (this.newlist.length > 0) {
                return this.notEmptyBasket();
            } else {
                this.emptyBasket();
            }
        },


        emptyBasket() {
            this.htmlBasket.innerHTML = '';
            this.htmlBasket.insertAdjacentHTML('beforeend', '<div> КОРЗИНА ПУСТА</div>');
        },

        notEmptyBasket() {
            this.htmlBasket.innerHTML = '';
            this.newlist.forEach(item => {
                this.htmlBasket.insertAdjacentHTML('beforeend', this.renderBasketCatalog(item));
            })
        },
        renderBasketCatalog(item) {
            return `
                <div>
                    <ul>
                        <li>Наименование: ${item.name}</li>
                        <li>Цена: ${item.price}</li>
                    </ul>

                </div>`;
        },


        count(){
            this.countHTML.innerHTML = '';
            this.countHTML.insertAdjacentHTML("beforeend", this.countRender());


        },
        countRender(){
            let count = this.newlist.length
            return `<div id="count">Общее количество: ${count}</div>`
        },


        add(id){
             this.list.forEach(products =>{if(products.id === id){
                 this.newlist.push(products);
                 this.renderBasket();
                 this.count();
             }
            } )
        },
        addEventDropBasket() {
        this.buttonClean.addEventListener('click', this.dropBasket.bind(this));
        },

        dropBasket() {
        this.newlist = [];
        this.renderBasket();
        this.count();

      },

    };

    catalog.init();


















