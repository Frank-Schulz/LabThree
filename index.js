let mark = 63

let grade
let note


grade = mark >= 85 && mark <= 100 ? 'A+' : '' ;



let isStudent = false;
let isSenior = false;
let price = isStudent ? 8 : isSenior ? 6 : 10
console.log(price);
// 6


console.log(grade)

if (mark >= 85 && mark <= 100) {
    grade = "A+";
} else if (mark >= 80 && mark <= 84) {
    grade = "A";
} else if (mark >= 75 && mark <= 79) {
    grade = "A-";
} else if (mark >= 70 && mark <= 74) {
    grade = "B+";
} else if (mark >= 65 && mark <= 70) {
    grade = "B";
} else if (mark >= 60 && mark <= 64) {
    grade = "B-";
} else if (mark >= 55 && mark <= 59) {
    grade = "C+";
} else if (mark >= 50 && mark <= 54) {
    grade = "C";
} else if (mark >= 40 && mark <= 49) {
    grade = "D";
} else if (mark >= 0 && mark <= 39) {
    grade = "E";
} else {
    console.log("Invalid Value")
}

switch (grade) {
    case "A+":
    case "A":
    case "A-":
        note = "Pass with Distinction";
        break;
    
    case "B+":
    case "B":
    case "B-":
        note = "Pass with Merit";
        break;

    case "C+":
    case "C":
        note = "Pass";
        break;

    case "D":
    case "E":
        note = "Fail Grades"
}

console.log(`The final mark is: ${grade} \n ${note}`);


// -------------------      Ternary Operator        ------------------

let students = ["John Smith", "Addie Lilley", "Shaun Myers", "Earline Wolters", "Rico Gonser", "Freddie Eckhardt", "Willow Riva", "Florentino Chavira", "Chandra Walder", "Christia Cournoyer", "Clayton Couey"]

let student = {
    name: "Jon Smith",
    mark: 57
}

// -------------------

let person = {
    name: 'tony',
    age: 20,
    driver: null
};


if (person.age >= 16) {
    person.driver = 'Yes';
} else {
    person.driver = 'No';
}

// same as

person.driver = person.age >=16 ? 'Yes' : 'No';
