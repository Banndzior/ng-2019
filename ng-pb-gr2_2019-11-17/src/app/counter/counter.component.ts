import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = 1;

  minus() {
    // this.count = this.count - 1;
    this.count--;
  }

  plus() {
    // this.count = this.count + 1;
    this.count++;
  }

  displayNiceCounter() {
    return "Masz: " + this.count + " punktów";
  };
}
