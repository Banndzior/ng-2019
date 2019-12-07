class Person {
    constructor(
        private firstName?: string,
        private lastName: string = 'M'
    ) { }

    public sayHello() {
        console.log('Siema ', this.firstName || 'Nieznany', this.lastName || 'Wedrowiec');
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

    showMyMoney() {
        console.table({ 'money': this.balance });
    }

    giveMeMoney(otherPerson: PersonAccount | null, amount: number = 6) {
        if(otherPerson != null) {
            this.sayHello();
            otherPerson.sayHello();
        }
        
        this.balance += amount;

        if(otherPerson != null) {
            otherPerson.giveMeMoney(null, -amount);
            this.showMyMoney();
            otherPerson.showMyMoney();
        }
    }
}

let myAccount = new PersonAccount('Kamil', 'M', -123);
let otherAccount = new PersonAccount('Inny', 'Ziom', 100000);

myAccount.giveMeMoney(otherAccount, 10000);
