import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective implements OnInit {

  @Input()
  set appClass(obj) {
    // todo: not complete
    Object.keys(obj)
      .forEach(name => {
        this.renderer.addClass(this.element.nativeElement, name);
      });
  }


  constructor(private element: ElementRef,
              private renderer: Renderer2) {

    //console.log(elemnt.nativeElement);
  }

  ngOnInit(): void {
    console.log(this.appClass);
    // this.renderer.addClass(this.elemnt.nativeElement,
    //   this.appClass.active ? 'active' : ''
    // );
  }


}
