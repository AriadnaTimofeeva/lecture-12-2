/*
Задача 2: Класс с приватными свойствами
Создайте класс Person, который будет иметь два свойства:
Приватное свойство #name (имя).
Приватное свойство #age (возраст).
Создайте методы getName() и getAge() для доступа к этим свойствам (геттеры).
*/



class Person {
    #name; 
    #age; 
  
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    getName() { 
      return this.#name;
    }
  
    getAge() {  
      return this.#age;
    }
  }
  
  
const person = new Person("Персона1", 20);
console.log(person.getName()); 
console.log(person.getAge());  
 