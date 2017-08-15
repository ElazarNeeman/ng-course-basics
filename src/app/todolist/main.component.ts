import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <section class="main">
      <ng-content></ng-content>
      <!--<input class="toggle-all"-->
      <!--type="checkbox">-->
      <!--<app-list></app-list>-->
    </section>
  `,
  selector: 'app-main',
  styles: []
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
