// 2) По клику на кнопку добавить в корзину товар с след параметрами:
//         1) Картинка
//         2) Заголовок
//         3) Доп параметры цвет
//         4) Цена
//     3) Добавить в корзину

// Конкретные задачи: 
    // 1) Получить картинку
    // 2) Получить заголовок
        // Решение: 
        //     let ttl = document.getElementsByClassName("ttl"); // <p class="ttl">Animal Print Sweatshirt</p>
        //     ttl[5].innerText // "Animal Print Sweatshirt"

    // 3) Получить доп параметры
    // 4) Получить цену
    
    // Прицип получения данных следующий:
    // Получить данные можно с помощью:
    // .class
    // #id
    // attribute
    // tag


    // .class - document.getElementsByClassName  - Внутри документа получить элементы по названию класса
    //          вкладка
    //          (.) связка 
    //          get  - получить
    //          Elements  - Элементы (потому что классов бывает несколько)
    //          By  - по / от
    //          ByClassName  - название класса




    // let ttl = document.getElementsByClassName("ttl");
    // ttl[1].innerText
    
        //Результат: ничего не вывелось

    // Без команды вывод ничего не выведется!

    let ttl = document.getElementsByClassName("ttl");
    console.log(ttl[5].innerText);