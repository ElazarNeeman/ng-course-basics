import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  template: `
    <p>
      test-comp Works!
    </p>
  `,
  styles: []
})
export class TestCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
