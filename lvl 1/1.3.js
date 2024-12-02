/*
Задача 3: Пример наследования классов
Создайте два класса:
Базовый класс Animal — для описания животных с методами для вывода информации о животном.
Наследуемый класс Dog — для описания собак, который наследует от класса Animal и переопределяет метод для вывода сообщения о том, что собака лает.
 */



class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    getInfo() {
      console.log(`Вид животного: ${this.name}. Издает звук: ${this.sound}`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name, "Гав!"); 
    }
  
    getInfo() {
      console.log(`Имя собаки: ${this.name}. Она лает: ${this.sound}`);
    }
  }
  

  const animal1 = new Animal("Кот", "Мяу!");
  animal1.getInfo(); 
  
  const dog1 = new Dog("Пушек");
  dog1.getInfo(); 
  
  