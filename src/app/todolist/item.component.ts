import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <li [ngClass]="{ completed : item.completed }">
      <div class="view">
        <input class="toggle"
               [checked]="item.completed"
               type="checkbox">
        <label>{{item.title | low:'!!!'}} created at {{item.created | date:'dd/MM/yyyy'}}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit">
    </li>
  `,
  styles: []
})
export class ItemComponent {

  @Input() item;
  constructor() { }

}
