import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {

  @Input()
  public appMarker: string;

  @HostBinding('style.color')
  public bgColor: string;

  constructor() {
    this.bgColor = 'red';
  }

  @HostListener('mouseenter')
  public mark() {
    this.bgColor = this.appMarker;
  }

  @HostListener('mouseout')
  public clear() {
    this.bgColor = '';
  }


}
