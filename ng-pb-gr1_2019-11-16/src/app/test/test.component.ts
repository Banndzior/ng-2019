import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      {{"ktest"}}
    </p>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
