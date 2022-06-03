// Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"


const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return 'Ошибка!';
    }
    
    return str.split('').reverse().join('');
}