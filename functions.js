// Function - input, code, output
const pi = 3.141592;

let greetMessage = function () {
    console.log('Hello! nice to meet you guy.');
};

greetMessage();

let square = function (side) {
    return side * side;
};

let rectangle = function (leight, width) {
    return leight * width;
};

let trapezoid = function (height, smallBase, bigBase) {
    return (smallBase + bigBase) * (height / 2);
};

let cicle = function (radius) {
    return pi * radius * radius;
};

let ellipse = function (radius1, radius2) {
    return pi * radius1 * radius2;
}

let triangle = function (heightBase = 0, base = 0) {
    return (heightBase * base) / 2;
}

let equilateralTriangle = function (side = 0) {
    let height = (side / 2) * 3
    return (side * side) / 2;
}

//student grade calculation.
//Grade A (90% - 100%), B (80% - 89%), C (70% - 79%), D (60% - 69%), E (50% - 59%), F (0% - 49%)
let getStudentGrade = function (score = 0, fullScore = 100) {
    const percen = (score / fullScore) * 100;
    let gradeLetter = '';

    if (percen >= 90) {
        gradeLetter = 'A';
    } else if (percen >= 80) {
        gradeLetter = 'B';
    } else if (percen >= 70) {
        gradeLetter = 'C';
    } else if (percen >= 60) {
        gradeLetter = 'D';
    } else if (percen >= 50) {
        gradeLetter = 'E';
    } else {
        gradeLetter = 'F';
    }

    return `You got a grade ${gradeLetter} (${percen}%)!`;
}
let square1 = getStudentGrade();
//console.log(square1);


let find_max = function (nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
        console.log(num);
        if (num > max_num) {
            max_num = num;
        }
    }
    return max_num;
}
console.log(find_max([1,4,8,0,2,6]));
