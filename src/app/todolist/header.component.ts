import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h1>{{title}}</h1>
      <input #inputElement
             class="new-todo"
             placeholder="What needs to be done?"
             autofocus
             (keydown.enter)="itemAdded.emit(inputElement.value)">
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Output() itemAdded = new EventEmitter<String>();

  constructor() {
  }

  ngOnInit() {
  }

}
