import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestCompComponent} from './app.test-comp.component';
import {TodolistModule} from './todolist/todolist.module';
import {UtilsModule} from './utils/utils.module';



@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    TodolistModule,
    UtilsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
