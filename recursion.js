// Посчитать процент общего прохождения всех курсов

const students = {
    js: [{
        name: "Jonh",
        progress: 100
    }, {
        name: "Ivan",
        progress: 60
    }],

    html: {
        basic: [{
            name: "Sega",
            progress: 20
        }, {
            name: "Adelya",
            progress: 10
        }],
        pro: [{
            name: "Sega",
            progress: 20
        }]
    }
};


//* First solution
// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;
// console.log(students);

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
// console.log(total);
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;
// console.log(students);

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
// console.log(total);
//                 }
//             }
//         }
//     }
//     return (total / students);
// }

// console.log(getTotalProgressByIteration(students));


//* Second solution
function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length]
    } else {
        let total = [0, 0];

        for(let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData)
            total[0] += subDataArr[0]
            total[1] += subDataArr[1]
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1])



// 1. Был объект с двумя свойствами, в одном массив, в другом объект.

// 2. Проверяем являются ли исходные данные массивом. Нет, это объект. Идем в else.

// 3. Создаем массив с двумя значениями.

// 4. Задаем цикл. Обращаемся к объекту. Конкретно к значениям свойств. То есть перебираем массив, который в js и объект в html.

// 5. Создаем новую переменную, в нее вызов этой же функции, в аргументы поочередно массив и объект из пункта 4. Поочередно, потому что цикл.

// 6. Данные не знаем, функция заново запускается. В аргументы приходит массив из js. Проверяем на массив, правда. Создаем новую переменную.

// 7. Запускаем цикл и значения свойства progress приплюсовываем к новой переменной.

// 8. Возвращаем массив, в котором первое значение суммированный прогресс, второе количество значений, то есть студентов.

// 9. Эта функция завершилась. Возвращаемся к первому вызову. В переменную subDataArr помещаем массив с 160 и 2. Цикл идет дальше. Вкладываем данные массива в новый массив из блока else.

// 10. Первый шаг цикла закончился. Теперь второй. Смотрим объект из свойства html. Заново вызываем функцию, передаем этот объект.

// 11. В первом блоке условия не массив, идем дальше. Обращаемся к значениям свойств html, это basic и pro. Их значения - это массивы. Теперь они в цикле. То есть уже второй уровень цикла. Первый также идет.

// 12. Вызываем функцию, в нее вкладываем первое значение цикла - значение свойства basic - массив. Первое условие срабатывает. Функция возвращает 38 и два. Возвращаем в первую функцию и второй уровень цикла.

// 13. В subDataArr возвращается массив с 38 и 2. Следующими двумя шагами он приплюсовывается и возвращает 198 и 4.

// 14. Следующий шаг второго цикла. Помещаем в вызов функции массив из pro. Значения не знаем, значит опять вызываем функцию.

// 15. Проверяем на массив, все верно. Задаем новую переменную, в нее прогресс. Возвращаем 10 и 1.

// 16. Возвращаем в цикл. Функция вернула массив. Приплюсовываем к переменной, получаем массив с 208 и 5. Все циклы завершились, возвращаем переменную.

// 17. Помещаем вызов в новую функцию, вкладываем основной объект.

// 18. И затем делим общий прогресс на студентов.