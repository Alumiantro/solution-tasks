// У вас есть список учеников, которые хотят поиграть в игру. Но команд может быть только 3 по 3 человека. Напишите функцию , которая принимает в себя массив строк.
// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами.
// Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let group1 = [];
    let group2 = [];
    let group3 = [];
    let str = [];

    arr.forEach(function (item, index) {
        if (index <= 2) {
            group1.push(item);
        } else if (
            index <= 5) {
            group2.push(item);
        } else if (
            index <= 8) {
            group3.push(item);
        } else if (
            index > 8) {
            str.push(item);
        }
    });

    const result = [group1, group2, group3, `Оставшиеся студенты: ${(str.length === 0) ? '-' : str.join(', ')}`];
    return result;
}

sortStudentsByGroups(students)




//* Aльтернативный вариант

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
 
// function sortStudentsByGroups(arr) {
//   const sortArr = arr.slice().sort();
 
//   const resultArr = [], groupArr = [];
 
//   sortArr.forEach(item => {
//     groupArr.push(item);
 
//     if (groupArr.length === 3) {
//       resultArr.push(groupArr.slice());
//       groupArr.length = 0;
//     }
//   })
 
//   resultArr.push(`Оставшиеся студенты: ${groupArr.length === 0 ? '-' : groupArr.join(', ')}`);
//   console.log(resultArr);
// }

// sortStudentsByGroups(students)