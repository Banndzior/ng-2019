import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number;

  constructor() {
    this.count = 0;
    // setInterval(() => {
    //   this.count += 1000;
    // }, 3000);
  }

  plus() {
    let obj = new TestClass();
    obj.test();
    // this.count = this.count + 1;
    this.count++;
    // window.document.body.style.backgroundColor = 'red';
  }

  minus() {
    // if(this.count > 0)
      this.count--;
  }
}

class TestClass {
  constructor() {
    console.log('created');
  }

  test() {
    console.log('test');
  }
}