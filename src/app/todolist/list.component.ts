import {Component, Input, OnInit} from '@angular/core';
import {Item} from "./Item";

@Component({
  selector: 'app-list',
  template: `
    <ul class="todo-list">
      <app-item *ngFor="let item of items" [item]="item"></app-item>
    </ul>
  `,
  styles: []
})
export class ListComponent {

  @Input() items: Item[];

}
