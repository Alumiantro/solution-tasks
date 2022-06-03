// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// Создайте метод showAgeAndLangs внутри объекта personalPlanPeter внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде. Заметьте, языки подставляются всегда в верхнем регистре.

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
    },
    showAgeAndLangs: function(obj) {
        const {languages} = obj.skills;
        const {age} = obj;
        let str = `Мне ${age} и я владею языками:`;
  
        languages.forEach(function(item) {
            str += ` ${item.toUpperCase()}`
        })
        
        console.log(str);
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
