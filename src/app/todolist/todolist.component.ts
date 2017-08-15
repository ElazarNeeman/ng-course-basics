import {Component, OnInit} from '@angular/core';
import {TodolistService} from './todolist.service';



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

  public list: TodolistService;
  //private logger : LoggerService;

  public title: string;

  constructor(list: TodolistService) {
    this.list = list;
    this.title = 'Todos';
    //this.logger.log('TodolistComponent log');
  }

  ngOnInit() {
  }

  public addItems(title: string) {

    this.list.addItems(title);
    //this.logger.log(`added ${title}`);
  }

}
