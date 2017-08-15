import {Component, OnInit} from '@angular/core';
import {Todolist} from './todolist';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">
      <app-header [title]="title" (itemAdded)="addItems($event)"></app-header>
      <app-main>
        <app-toggle></app-toggle>
        <app-list [items]="list.items"></app-list>
      </app-main>
      <app-footer></app-footer>
    </section>
  `,
  styles: []
})
export class TodolistComponent implements OnInit {

  public list: Todolist;

  public title: string;

  constructor() {
    this.list = new Todolist();
    this.title = 'Todos';
  }

  ngOnInit() {
  }

  public addItems(title: string) {

    this.list.addItems(title);
    console.log(`added ${title}`);
  }

}
