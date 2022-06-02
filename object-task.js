// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    
    return str;
}
