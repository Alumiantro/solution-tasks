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

    const form = document.querySelector('.add')
    const favouriteFilm = document.getElementById('fav_film')
    // const basketForDelete = document.querySelectorAll('.delete')

    form.addEventListener('submit', function addedValue(event) {
        event.preventDefault();
        let newFilm = document.getElementById('get_val').value;

        if (newFilm) {
            if (newFilm.length > 21) {
                promoList.innerHTML +=
                newFilm = `${newFilm.substring(0, 21)}...`
            }
    
            if (favouriteFilm.checked) {
                console.log('Добавляем любимый фильм')
            }

            movieDB.movies.push(newFilm)
            sortArr(movieDB.movies)
            createNewList(promoList, movieDB.movies)
            event.target.reset()
        }
    })

    function sortArr(arr) {
        arr.sort()
    }

    function createNewList(parent, arr) {
        parent.innerHTML = '';

        arr.forEach((item, index) => {
            parent.innerHTML +=
                `<li class="promo__interactive-item">${index + 1} ${item}
                <div class="delete"></div>
            </li>`
        })

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createNewList(promoList, movieDB.movies)
            });
        });
    }

    createNewList(promoList, movieDB.movies)
})

//Пошагово: был сначала список на странице (и внутри элементы с delete), потом мы добавили в новый фильм и этот список полностью пересоздался на странице. То есть те элементы, на которых висели обработчики просто исчезли. На их месте появились новые, уже без них. Это в случае, когда мы элементы помещаем в переменную, ведь переменная принимает значение только один раз.

// А вот когда мы используем конструкцию document.querySelectorAll('.delete), то эти элементы каждый раз на странице находятся по этому селектору и даже если появились новые элементы - событие все равно повесится.