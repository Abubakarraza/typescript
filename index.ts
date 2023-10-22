// String Data Type
let myWindow: string = 'blue';

// Number Data Type

let myAge: number = 30;

// Boolean Data Type

let hasHobbies: boolean = true;

// Any Data Type

let myCar: any = 'BMW';

myCar = 10;

//  String Array

let hobbies: string[] = ['cooking', 'sports'];

// Number Array

let myNumbers: number[] = [1, 2, 3];

// Any Array

let anyArray: any[] = ['name', 2, true];

// Object Type

let person: {
  name: string;
  age: number;
  isGraduate: boolean;
} = {
  name: 'Abubakar',
  age: 19,
  isGraduate: true,
};

const AgeMap: { [index: string]: number } = {};

AgeMap.age = 12; // it is working fine
// AgeMap.age='12' it throw error

//  Enum Data Type
// Custom Data Type

enum daysOfWeek {
  MON = 10,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
}

let days: daysOfWeek = daysOfWeek.FRI;
days = daysOfWeek.SAT;

console.log('days:', days);

// Tuple Data Type
// it is like array but you can define your custom data here
let Student: {
  name: string;
  id: number;
  role: [number, string];
} = {
  name: 'Abubakar',
  id: 12,
  role: [12, 'developer'],
};

// Functions

const add = (num1: number, num2: number, isShown?: boolean) => {
  if (isShown) console.log(`${num1} + ${num2} = ${num1 + num2}`);
  else return num1 + num2;
};

const shownOnly = add(2, 4, true);

console.log('shownOnly:', shownOnly);

const Result = add(2, 5);

console.log('Result:', Result);

// Handle Function Return type

const isEven = (num: number): boolean => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const checkEven = isEven(22);
console.log('checkEven:', checkEven);

type returnArr = {
  label: string;
  value: string;
};
const arrayToObj = (arr: string[]): returnArr[] => {
  const newArr = arr.map((item) => {
    return {
      label: item,
      value: item,
    };
  });
  return newArr;
};

let arr: string[] = ['red', 'green', 'blue'];

const result = arrayToObj(arr);

console.log('ArrayResult:', result);

// Alias Type

type CarNumber = number;
type CarName = string;

const myCarNumber: CarNumber = 12;
const myCarName: CarName = 'Audi';

type CarProperties = {
  name: string;
  brand: string;
  number: number;
};

const myCarData: CarProperties = {
  name: 'Audi',
  brand: 'raza',
  number: 12,
};

// Interface

interface book {
  name: string;
  author: string;
}

const myBook: book = {
  name: 'having Good day',
  author: 'raza',
};

// we can also extend interface property

interface BookDetail extends book {
  pages: number;
}

const bootWithPage: BookDetail = {
  name: 'Having Good Day',
  author: 'Raza',
  pages: 10,
};

// Union Types
const checkValType = (val: string | number): string => {
  if (typeof val === 'string') {
    return 'string';
  } else {
    return 'number';
  }
};
const checkType = checkValType('stign');
// TypeScript Casting

let bag: unknown = 'myBag';

console.log('myBag:', (bag as string).length); // it is working fine

console.log('MyBag:', (bag as number) * 2); // it give us Nan because bag is not a number

// Classes

class Teacher {
  name: string = '';
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const teacher = new Teacher('Abubakar');

const teacherName = teacher.getName();
console.log('teacherName:', teacherName);

// Generic Concepts

type Wrapped<T> = {
  name: T;
};

// if pass number then the type will be number

const Generic: Wrapped<number> = {
  name: 10,
};

function createArray<T, S>(val1: T, val2: S): [T, S] {
  return [val1, val2];
}

let myArr = createArray<string, number>('Abubakar', 20);

console.log('Generic ARr', myArr);

// Partial
// Partial changes all the properties in an object to be optional.
interface point {
  x: number;
  y: number;
}

const axis: Partial<point> = {
  x: 10,
};

// Required

// Required changes all the properties in an object to be required.
const myAxis: Required<point> = {
  x: 10,
  y: 10,
};

// Record

// Record is a shortcut to defining an object type with a specific key type and value type.

const record: Record<string, number> = {
  fullMarks: 10,
  obtainedMarks: 8,
};

console.log('record:', record);

// Omit

// Omit removes keys from an object type.

const myRecord: Omit<point, 'x'> = {
  y: 10,
};

// Pick

//Pick removes all but the specified keys from an object type.

const myPickRecord: Pick<point, 'x'> = {
  x: 10,
};
