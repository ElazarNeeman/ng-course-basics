import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">
      <app-header></app-header>
      <app-main>
        <app-toggle></app-toggle>
        <app-list></app-list>
      </app-main>
      <app-footer></app-footer>
    </section>
  `,
  styles: []
})
export class TodolistComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
