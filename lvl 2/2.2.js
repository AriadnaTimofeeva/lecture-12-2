/*
Задача 2: Создание классов для работы с геометрическими фигурами
Создайте абстрактный базовый класс Shape для представления геометрической фигуры.
Используйте наследование для создания классов Rectangle и Circle, которые наследуют от Shape.
В классе Shape должно быть приватное поле #name, которое хранит название фигуры.
В классе Rectangle и Circle переопределите метод getArea(), который будет вычислять площадь фигуры. Это демонстрирует полиморфизм.
В классе Shape создайте статическое поле count, которое отслеживает количество созданных объектов фигур.
Что необходимо сделать:
Создайте объекты классов Rectangle и Circle и покажите, как работает полиморфизм (переопределение методов).
Продемонстрируйте работу статического поля, отслеживающего количество объектов.
*/



class Shape {
    static #count = 0;
    #name;

    constructor(name) {
        this.#name = name; 
        Shape.#count++; 

    }

    getName() {
        return this.#name;
    }

    getArea() { 
        
    }

    static getCount() {
        return Shape.#count;
    }
}

// // //
class Rectangle extends Shape {
    constructor(width, height) {
        super("Прямоугольник"); 
        this.width = width; 
        this.height = height; 
    }

    // переопределение метода:
    getArea() {
        return this.width * this.height;
    }
}
// // //


// // //
class Circle extends Shape {
    constructor(radius) {
        super("Круг"); 
        this.radius = radius; 
    }

    // переопределение метода:
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
// // //



const rectangle = new Rectangle(10, 5);
console.log(`${rectangle.getName()} с площадью: ${rectangle.getArea()}`); 

const circle = new Circle(9);
console.log(`${circle.getName()} с площадью: ${circle.getArea()}`); 

console.log(`Количество созданных фигур: ${Shape.getCount()}`); 
