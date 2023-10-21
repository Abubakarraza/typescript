// String Data Type
var myWindow = 'blue';
// Number Data Type
var myAge = 30;
// Boolean Data Type
var hasHobbies = true;
// Any Data Type
var myCar = 'BMW';
myCar = 10;
//  String Array
var hobbies = ['cooking', 'sports'];
// Number Array
var myNumbers = [1, 2, 3];
// Any Array
var anyArray = ['name', 2, true];
// Object Type
var person = {
    name: 'Abubakar',
    age: 19,
    isGraduate: true,
};
var AgeMap = {};
AgeMap.age = 12; // it is working fine
// AgeMap.age='12' it throw error
//  Enum Data Type
// Custom Data Type
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["MON"] = 10] = "MON";
    daysOfWeek[daysOfWeek["TUE"] = 11] = "TUE";
    daysOfWeek[daysOfWeek["WED"] = 12] = "WED";
    daysOfWeek[daysOfWeek["THU"] = 13] = "THU";
    daysOfWeek[daysOfWeek["FRI"] = 14] = "FRI";
    daysOfWeek[daysOfWeek["SAT"] = 15] = "SAT";
})(daysOfWeek || (daysOfWeek = {}));
var days = daysOfWeek.FRI;
days = daysOfWeek.SAT;
console.log('days:', days);
// Tuple Data Type
// it is like array but you can define your custom data here
var Student = {
    name: 'Abubakar',
    id: 12,
    role: [12, 'developer'],
};
// Functions
var add = function (num1, num2, isShown) {
    if (isShown)
        console.log("".concat(num1, " + ").concat(num2, " = ").concat(num1 + num2));
    else
        return num1 + num2;
};
var shownOnly = add(2, 4, true);
console.log('shownOnly:', shownOnly);
var Result = add(2, 5);
console.log('Result:', Result);
// Handle Function Return type
var isEven = function (num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
var checkEven = isEven(22);
console.log('checkEven:', checkEven);
var arrayToObj = function (arr) {
    var newArr = arr.map(function (item) {
        return {
            label: item,
            value: item,
        };
    });
    return newArr;
};
var arr = ['red', 'green', 'blue'];
var result = arrayToObj(arr);
console.log('ArrayResult:', result);
var myCarNumber = 12;
var myCarName = 'Audi';
var myCarData = {
    name: 'Audi',
    brand: 'raza',
    number: 12,
};
var myBook = {
    name: 'having Good day',
    author: 'raza',
};
var bootWithPage = {
    name: 'Having Good Day',
    author: 'Raza',
    pages: 10,
};
// Union Types
var checkValType = function (val) {
    if (typeof val === 'string') {
        return 'string';
    }
    else {
        return 'number';
    }
};
var checkType = checkValType('stign');
// TypeScript Casting
var bag = 'myBag';
console.log('myBag:', bag.length); // it is working fine
console.log('MyBag:', bag * 2); // it give us Nan because bag is not a number
// Classes
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = '';
        this.name = name;
    }
    Teacher.prototype.getName = function () {
        return this.name;
    };
    return Teacher;
}());
var teacher = new Teacher('Abubakar');
var teacherName = teacher.getName();
console.log('teacherName:', teacherName);
