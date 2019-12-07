"use strict";
console.log(123);
var liczba = 1;
var tekst = 'kamil';
var wyrazenie = "Moj kod taki piekny: " + liczba + ", " + tekst;
console.table(wyrazenie);
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.pole = 0;
    }
    MyClass.prototype.test = function () {
        this.pole++;
        return this;
    };
    return MyClass;
}());
new MyClass().test().test().test().test().test().test();
//# sourceMappingURL=lab.js.map