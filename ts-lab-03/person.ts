class Person2 {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log('Hejka, tu', this.firstName, this.lastName);
    }
}




class Person {
    constructor(
        private firstName: string,
        private lastName: string
    ) {
        console.log('Person.constructor()');
    }

    sayHello() {
        console.log('Hejka, tu', this.firstName, this.lastName);
    }
}

class PersonAccount extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private balance: number
    ) {
        super(firstName, lastName);
    }

    transfer(otherPersonAccount: PersonAccount, amount: number) {
        this.balance -= amount;
        this.sayHello();

        otherPersonAccount.balance += amount;
        otherPersonAccount.sayHello();
    }
    
    sayHello() {
        super.sayHello();
        console.log('My account balance: ', this.balance);
    }
}

let me = new Person('Kamil', 'Mijacz');
me.sayHello();

let myAccount = new PersonAccount('Kamil', 'Mijacz', 13);
let otherAccount = new PersonAccount('Inna', 'Osoba', 1000);

myAccount.transfer(otherAccount, 10);


