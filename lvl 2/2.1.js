/*
Задача 1: Работа с классами
Напишите два класса:
Класс Person:
В нем должно быть приватное поле _name, которое хранит имя.
Необходимо добавить метод getName() для получения имени.
Также должен быть метод setName(newName) для изменения имени.
Использование приватных полей должно быть строго ограничено внутри класса, доступ к ним извне возможен только через методы.
Класс Student, наследующийся от Person:
Класс Student должен добавлять новое приватное поле _grade (оценка).
Для работы с этим полем нужно использовать геттер и сеттер:
getGrade() для получения оценки.
setGrade(newGrade) для изменения оценки.
Важно, чтобы при установке оценки в Student, значение было проверено на допустимость (например, оценка должна быть в пределах от 1 до 5).
*/



class Person {
    #name;

    constructor(name) {
        this.#name = name; 
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        this.#name = newName;
    }
}

class Student extends Person {
    #grade;

    constructor(name, grade) {
        super(name); // вызов конструктора родительского класса
        this.setGrade(grade); // установка начальной оценки с проверкой
    }

    getGrade() {
        return this.#grade;
    }

    // сеттер с проверкой допустимости:
    setGrade(newGrade) {
        if (newGrade < 1 || newGrade > 5) {
            throw new Error("Оценка должна быть в пределах от 1 до 5!");
        }
        this.#grade = newGrade;
    }
}


const student = new Student('Студент1', 4);
console.log(student.getName()); 
console.log(student.getGrade()); 

student.setName('Студент2');
console.log(student.getName());

student.setGrade(5);
console.log(student.getGrade()); 

// проверка:
try {
    student.setGrade(7); 
} catch (error) {
    console.error(error.message); 
}
