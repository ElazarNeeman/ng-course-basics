import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggerService} from './logger.service';
import {LowPipe} from './low.pipe';
import {MarkerDirective} from './marker.directive';
import { ClassDirective } from './class.directive';
import { IfDirective } from './if.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LoggerService],
  declarations: [LowPipe, MarkerDirective, ClassDirective, IfDirective],
  exports: [LowPipe, MarkerDirective, ClassDirective, IfDirective]
})
export class UtilsModule {
}
