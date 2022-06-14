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

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            // console.log(students);

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
                // console.log(total);
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;
                // console.log(students);

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                    // console.log(total);
                }
            }
        }
    }
    return students;
}

console.log(getTotalProgressByIteration(students));