/*
Задача 1: Создание класса
Создайте класс Book, который будет представлять книгу. Класс должен содержать:
Конструктор для инициализации названия книги и имени автора.
Метод getBookInfo(), который возвращает строку с информацией о книге (название и автор).
Что необходимо сделать:
Создайте объект класса Book.
Вызовите метод getBookInfo() для вывода информации о книге.
*/



class Book {

    constructor(title, author) {
        this.title = title; 
        this.author = author; 
    }

    getBookInfo() {
        return `Книга "${this.title}", ее автор: ${this.author}.`;
    }
}


const book1 = new Book("Карты на столе", "Агата Кристи");
console.log(book1.getBookInfo()); 
