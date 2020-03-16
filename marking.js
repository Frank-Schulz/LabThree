let mark = 87

let grade
let note

if (mark >= 0 && mark <= 39) {
    grade = "E";
} else if (mark >= 85 && mark <= 100) {
    grade = "Aplus";
} else if (mark >= 80 && mark <= 84) {
    grade = "A";
}else if (mark >= 75 && mark <= 79) {
    grade = "Aminus";
}else if (mark >= 70 && mark <= 74) {
    grade = "Bplus";
}else if (mark >= 65 && mark <= 70) {
    grade = "B";
}else if (mark >= 60 && mark <= 64) {
    grade = "Bminus";
}else if (mark >= 55 && mark <= 59) {
    grade = "Cplus";
}else if (mark >= 50 && mark <= 54) {
    grade = "C";
}else if (mark >= 40 && mark <= 49) {
    grade = "D";
}else if (mark >= 0 && mark <= 39) {
    grade = "E";
}

switch (grade) {
    case "Aplus":
    case "A":
    case "Aminus":
        note = "Pass with Distinction";
        break;
    
    case "Bplus":
    case "B":
    case "Bminus":
        note = "Pass with Merit";
        break;

    case "Cplus":
    case "C":
        note = "Pass";
        break;

    case "D":
    case "E":
        note = "Fail Grades"
}

console.log(`The final mark is: ${grade} \n ${note}`);