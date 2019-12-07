console.log(123);

let liczba = 1;

let tekst = 'kamil';

const wyrazenie = `Moj kod taki piekny: ${liczba}, ${tekst}`;

console.table(wyrazenie);

class MyClass {
    pole: number = 0;

    test() {
        this.pole++;
        return this;
    }
}

new MyClass().test().test().test().test().test().test();