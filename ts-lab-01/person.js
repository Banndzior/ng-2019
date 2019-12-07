"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        if (lastName === void 0) { lastName = 'M'; }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.sayHello = function () {
        console.log('Siema ', this.firstName || 'Nieznany', this.lastName || 'Wedrowiec');
    };
    return Person;
}());
var PersonAccount = /** @class */ (function (_super) {
    __extends(PersonAccount, _super);
    function PersonAccount(firstName, lastName, balance) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.balance = balance;
        return _this;
    }
    PersonAccount.prototype.showMyMoney = function () {
        console.table({ 'money': this.balance });
    };
    PersonAccount.prototype.giveMeMoney = function (otherPerson, amount) {
        if (amount === void 0) { amount = 6; }
        if (otherPerson != null) {
            this.sayHello();
            otherPerson.sayHello();
        }
        this.balance += amount;
        if (otherPerson != null) {
            otherPerson.giveMeMoney(null, -amount);
            this.showMyMoney();
            otherPerson.showMyMoney();
        }
    };
    return PersonAccount;
}(Person));
var myAccount = new PersonAccount('Kamil', 'M', -123);
var otherAccount = new PersonAccount('Inny', 'Ziom', 100000);
myAccount.giveMeMoney(otherAccount, 10000);
//# sourceMappingURL=person.js.map