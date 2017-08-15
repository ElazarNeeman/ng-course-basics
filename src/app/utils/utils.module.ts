import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggerService} from './logger.service';
import {LowPipe} from './low.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LoggerService],
  declarations: [LowPipe],
  exports: [LowPipe]
})
export class UtilsModule {
}
