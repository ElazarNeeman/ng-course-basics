///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Directive, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective implements OnInit {


  ngOnInit(): void {
  }

  constructor(private template: TemplateRef<any>,
              private entry: ViewContainerRef,
              private renderer: Renderer2) {
  }

  @Input() set appIf(flag: boolean){
    console.log(flag);

    if (flag) {
      this.entry.createEmbeddedView(this.template);
    } else {
      this.entry.clear();
    }
  }
}
