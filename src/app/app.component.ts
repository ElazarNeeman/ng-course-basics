import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <!--
    <input  #inputeText [placeholder]="text">
    <button (click)="changeTitle(inputeText.value)">Click me</button>
    -->
    <app-todolist></app-todolist>
  `,
})
export class AppComponent {

  public title: string;
  public text: string;

  constructor() {
   this.title = 'Hello angular 123';
   //
   // setTimeout( () => { this.title = 'zzz'; }, 1000);
  }

  // public changeTitle(newValue: string): void {
  //   this.title = newValue;
  //   // this.text = 'choose title';
  // }


}
