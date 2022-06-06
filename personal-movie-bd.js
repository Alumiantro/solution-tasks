// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос: 'Сколько фильмов вы уже посмотрели?'
// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false
// 3) Задайте пользователю по два раза вопросы:
//    'Один из последних просмотренных фильмов?' и 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }
// Проверить, чтобы все работало без ошибок в консоли */


//* const personalMovieDB = {
//*   count: numberOfFilms,
//*   movies: {},
//*   actors: {},
//*   genres: [], 
//*   privat: false
//* };

//* const a = prompt('Один из последних просмотренных фильмов?', 'Great Hatsby');
//* const b = +prompt('На сколько оцените?', 3);
//* const c = prompt('Один из последних просмотренных фильмов?', 'Great Hatsby');
//* const d = +prompt('На сколько оцените?', 3);

//* personalMovieDB.movies[a] = b
//* personalMovieDB.movies[c] = d

//* console.log(personalMovieDB)


// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - возвращаем пользователя к вопросам опять.
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -  "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

//* function rememberFilms () {
//*     for(let i = 0; i < 2; i++) {
//*       const a = prompt('Один из последних просмотренных фильмов?', 'Great Hatsby');
//*       const b = prompt('На сколько оцените?', 3);

//*     if (a != "" && b != "" && a != null && b != null && a.length < 50) {
//*       personalMovieDB.movies[a] = b;
//*       console.log('ok');
//*     } else {
//*       i--;
//*     }
//*     }
//*   }

//*   rememberFilms();


//*   function detectPersonalLevel() {
//*     if(personalMovieDB.count < 10) {
//*     console.log('Просмотрено довольно мало фильмов')
//*     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//*     console.log('Вы классический зритель')
//*     } else if (personalMovieDB.count > 30) {
//*     console.log('Вы киноман')
//*     } else {
//*     console.log('Произошла ошибка')
//*     }
//*   }

//*   detectPersonalLevel();



// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - при помощи метода forEach вывести в консоль сообщение в таком виде: "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:  function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 2);
        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.counts)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 2);
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    rememberFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', 'Great Hatsby');
            const b = prompt('На сколько оцените?', 3);

            if (a != "" && b != "" && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('ok');
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель')
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман')
        } else {
            console.log('Произошла ошибка')
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true
        }
        else if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${i}`);
            if (a != "" || a != null) {
                personalMovieDB.genres[i - 1] = a
            } else {
                i--;
            }
        }

        const str = 'Любимый жанр'
        personalMovieDB.genres.forEach(function(item, index) {
            str += ` #${index} - это ${item}`
        })
        console.log(str)
    }
};

personalMovieDB.showMyDB(personalMovieDB.privat)
personalMovieDB.toggleVisibleMyDB()
console.log(personalMovieDB.privat)
personalMovieDB.writeYourGenres()