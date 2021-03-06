import {NgModule} from '@angular/core';
/*Needed for UI stuff*/
import {CommonModule} from '@angular/common';
import {TodolistComponent} from './todolist.component';
import {HeaderComponent} from './header.component';
import {MainComponent} from './main.component';
import {FooterComponent} from './footer.component';
import {ListComponent} from './list.component';
import {ItemComponent} from './item.component';
import {ToggleComponent} from './toggle.component';
import {TodolistService} from './todolist.service';
import {UtilsModule} from '../utils/utils.module';

@NgModule({
  imports: [
    CommonModule, UtilsModule
  ],
  declarations: [TodolistComponent, HeaderComponent, MainComponent, FooterComponent, ListComponent, ItemComponent, ToggleComponent],
  exports: [TodolistComponent],
  providers: [TodolistService]
})
export class TodolistModule {
}
