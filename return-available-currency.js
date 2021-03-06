// Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу  (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. 
// Функция возвращает строку в нужном виде.


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     if (arr.length === 0) {
//         return 'Нет доступных валют';
//     }

//     const numIndex = arr.indexOf(missingCurr);
//     let str = 'Доступные валюты:\n';

//     arr.splice(numIndex, 1);
//     arr.forEach(function(item) {
//         str += `${item}\n`;
//     });

//     return str;
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');


// альтернативный вариант

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }

    let str = 'Доступные валюты:\n';
    arr.forEach(function(item) {
        if (item != missingCurr) {
            str += `${item}\n`;
        }
    });

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');