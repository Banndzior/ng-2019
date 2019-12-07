"use strict";
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        console.log('Person.constructor()');
    }
    Person.prototype.sayHello = function () {
        console.log('Hejka, tu', this.firstName, this.lastName);
    };
    return Person;
}());
var me = new Person('Kamil', 'Mijacz');
me.sayHello();
