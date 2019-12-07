"use strict";
class Person {
    constructor(firstName = 'Pan', lastName = 'Domyslny') {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        console.log('Hej', this.firstName, this.lastName);
        console.log(this);
    }
}
class PersonAccount extends Person {
    constructor(firstName, lastName, balance = 0) {
        super(firstName, lastName);
        this.balance = balance;
    }
    showMyMoney() {
        console.log(`${this.balance} PLN`);
    }
}
let me = new PersonAccount('Kamil', 'M', 12345678);
me.sayHello();
me.showMyMoney();
