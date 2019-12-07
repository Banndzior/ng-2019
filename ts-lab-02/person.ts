class Person {
    constructor(
        private firstName: string = 'Pan',
        private lastName: string = 'Domyslny'
    ) { }

    public sayHello() {
        console.log('Hej', this.firstName, this.lastName);
        console.log(this);
    }
}

class PersonAccount extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private balance: number = 0
    ) {
        super(firstName, lastName);
    }

    showMyMoney() {
        console.log(`${this.balance} PLN`);
    }
}

let me = new PersonAccount('Kamil', 'M', 12345678);
me.sayHello();
me.showMyMoney();