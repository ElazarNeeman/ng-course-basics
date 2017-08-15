import { NgModule } from '@angular/core';
/*Needed for UI stuff*/
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { HeaderComponent } from './header.component';
import { MainComponent } from './main.component';
import { FooterComponent } from './footer.component';
import { ListComponent } from './list.component';
import { ItemComponent } from './item.component';
import { ToggleComponent } from './toggle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodolistComponent, HeaderComponent, MainComponent, FooterComponent, ListComponent, ItemComponent, ToggleComponent],
  exports: [TodolistComponent]
})
export class TodolistModule { }
