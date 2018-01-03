/*
  1. Переписать код используя стрелочные функции

  function greetUsers(users) {
  users.forEach(function(user) {
    console.log("Hello " + user);
  });
}

greetUsers(["Mango", "Poly", "Ajax"]);
*/
const greetUsers = users => users.forEach(user =>console.log("Hello" + user));

greetUsers(['Mango', 'Poly', 'Ajax']);

/*
  2. Исправить код так, чтобы при вызове showName,
    this ссылался на объект user.

    const user = {
  name: "Mango",
  showName() {
    setTimeout(function() {
      console.log(this.name); // должно вывести Mango
    }, 1000);
  }
};

user.showName();
*/

const user = {
    name: "Mango",
    showName () {
        setTimeout (() => {console.log(this.name); //должно вывести Mango
        }, 1000);
    }
};

user.showName ();

/*
  3. Дополнить код так, чтобы функция showDogName вывела 'Poly'.
     Используйте bind или call.

     const dog = {
  name: "Poly"
};

function showDogName() {
  console.log(this.name);
}
*/

const dog = {
    name: "Poly"
};

function showDogName () {
    console.log(this.name);
}
showDogName.call(dog);

/*
  4. Создайте класс Shape который получает 2 значения, x и y координаты в виде числа.
  Создайте экземпляр класса Shape и убедитесь что это объект с полями x и y.
  Создайте класс Circle, который расширяет класс Shape, extends, он принимает кроме x и y еще radius будущей окружности.
   Создайте метод draw класса Circle, он просто выводит сообщение в консоль: "Рисую окружность с радиусом (radius) в координатах (x, y)"; Не забывайте о constructor и super.
*/
class Shape {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
};
const ShapeNew = new Shape (2, 5);
console.log(ShapeNew);

class Circle extends Shape {
    constructor(x, y, radius){
        super(x, y);
        this.radius;
    }
    draw () {
        console.log(`Рисую окружность с радиусом(${this.radius}) в координатах(${this.x}, ${this.y})`);
    }
}

/*
  5. Используя оператор spread дополните объект userB полями объекта userA, изменив значение поля age на 10 и добавьте поле isHappy со значением true

    const userA = {
  name: "Mango",
  age: 5
};

const userB = {};

console.log(userB); // {name: 'Mango', age: 10, isHappy: true}
*/

const userA = {
    name: "Mango",
    age: 5
};

const userB = {
    ...userA,
    age: 10,
    isHappy:true
};

console.log(userB); // {name: 'Mango', age: 10, isHappy: true}

/*
  6. Из данного объекта cat, используя деструктуризацию, возьмите только
      поля name и mood, выведите результат в консоль

      const cat = {
  name: "Mango",
  age: 2,
  mood: "happy",
  isFurry: true
};

*/

const cat = {
    name: "Mango",
    age: 2,
    mood: "happy",
    isFurry: true
};
let {
    name,
    mood
} = cat;
console.log(name);
console.log(mood);

/*
  7. Используя шаблонные строки "исправьте" строку вывода

  const name = "Mango";
const age = 3;

console.log(
  "This is a dog, his name is " + name + ", he is " + age + " years old."
);
*/

const nm = "Mango";
const age = 3;
console.log(`This is dog, his name is ${name}, he is ${age} years old.`);

/*
  8. Перепишите код ниже используя функциональные методы массивов и стрелочные функции

  const numbers = [1, 2, 3, 4, 5];

function makeSquare(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }

  return result;
}

console.log(makeSquare(numbers)); // [1, 4, 9, 16, 25]
*/

const numbers = [1, 2, 3, 4, 5];

const makeSquare = (arr) => {
    const result = arr.map(i => i*= i);
    return result;
}

console.log(makeSquare(numbers));//[1, 4, 9, 16, 25]

/*
9. Используя функциональные методы массивов:
  - написать функцию getGreaterThen(arr, val), котороя получает массив
   чисел и возвращает новый массив содержащий только числа из массива
   которые больше чем val
  - написать функцию getUserById(arr, id), которая получает массив
    объектов пользователей и возвращает объект пользователя с id
    равным указаному в аргументах функции.
  - написать функцию getActiveUsers(arr) которая получает массив
    объектов пользователей и возвращает только тех, у которых
    поле isActive содержит значение true

 function getGreaterThen(arr, val) {}

console.log(getGreaterThen([1, 2, 3, 4, 5], 3)); // [4,5]

console.log(getGreaterThen([1, 2, 3, 4, 5], 6)); // []

// используйте этот массив для функций работы с пользователем
const userList = [
  {
    id: 1,
    name: "Poly",
    isActive: true
  },
  {
    id: 2,
    name: "Poly",
    isActive: true
  },
  {
    id: 3,
    name: "Poly",
    isActive: true
  }
];
*/

const getGreaterThen = (arr, val) => {
    const result = arr.filter(num => num > val);
    return result;
}

console.log(getGreaterThen([1, 2, 3, 4, 5, ],3)); //[4,5]

console.log(getGreaterThen([1, 2, 3, 4, 5],6)); //[]


const userList = [
    {
    id:1,
    name: "Poly",
    isActive: true
},
{
    id:2,
    name:"Poly",
    isActive: true
},
{
    id: 3,
    name: "Poly",
    isActive: true
}
];
const getActiveUsers = (arr) => {
    const activeUsers = arr.filter(user => user.isActive === true);
    return activeUsers;
}
console.log(getActiveUsers(userList));

/*
  10. Используя полный apiUrl создать fetch запрос,
  получить ответ и вывести его в консоль, это будет массив ссылок
  на картинки.
  Обязательно написать блок обработки возможных ошибок запроса.

  const endpoint = "https://pixabay.com/api/?";
  const key = "key=5837779-ac3ba737206b541ae294f1119";
  const props = "&image_type=photo";
  const query = "&q=cat";
  const apiUrl = endpoint + key + props + query;
*/

const endpoint = "https://pixabay.com/api/?";
const key = "key=5837779-ac3ba737206b541ae294f1119";
const props = "&image_type=photo";
const query = "&q=cat";
const apiUrl = endpoint + key + props + query;
fetch(apiUrl)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Error: ${response.statusText}`);
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
