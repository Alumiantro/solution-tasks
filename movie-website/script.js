//* Задания на урок:
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// 2) Изменить жанр фильма, поменять "комедия" на "драма"
// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 
// 5) Добавить нумерацию выведенных фильмов

//* Задания:
// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"
// 5) Фильмы должны быть отсортированы по алфавиту

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const { movies } = movieDB;
    const promo = document.querySelectorAll(".promo__adv img");
    const promoGenre = document.querySelector('.promo__genre');
    const promoBg = document.querySelector('.promo__bg');
    const promoList = document.querySelector('.promo__interactive-list');

    promo.forEach(item => {
        item.remove()
    })
    promoGenre.textContent = 'драма'
    promoBg.style.background = 'url(img/bg.jpg) top center / cover no-repeat'
    movies.sort()
    promoList.innerHTML = ''
    movies.forEach((item, index) => {
        promoList.innerHTML +=
            `<li class="promo__interactive-item">${index + 1} ${item}
            <div class="delete"></div>
        </li>`
    })

    const formButton = document.getElementById('add_val')
    const favouriteFilm = document.getElementById('fav_film')
    const basketForDelete = document.querySelectorAll('.delete')

    formButton.addEventListener('click', addedValue)
    // favouriteFilm.addEventListener('click', addedFav)


    function addedValue(event) {
        event.preventDefault();
        const input = document.getElementById('get_val').value;

        if (input.length > 21) {
            promoList.innerHTML +=
                `<li class="promo__interactive-item">${+promoList.lastChild.textContent[0] + 1} ${input.slice(0, 21)}...
            <div class="delete"></div>
            </li>`
        } else {
            promoList.innerHTML +=
                `<li class="promo__interactive-item">${+promoList.lastChild.textContent[0] + 1} ${input}
            <div class="delete"></div>
            </li>`
        }

        if (favouriteFilm.checked) {
            console.log('Добавляем любимый фильм')
        }
    }

    basketForDelete.forEach((item, index) => {
        item.addEventListener('click', function deleteFilm() {
            promoList.childNodes[index].remove()
        })
    })

    // console.log(movies.sort())
    // console.log(promoList)
    // promoList.forEach((item) => {
    //     item.sort()
    // })
})


//touchstart
//touchmove 

document.addEventListener('DOMContentLoader', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault()

        console.log("start")
    })
})