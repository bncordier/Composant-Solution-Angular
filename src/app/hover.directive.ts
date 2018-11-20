import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

@HostBinding('class.greatest') myClass: boolean;

  constructor() { }

  ngOnInit() {}

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event){
    this.myClass = true;
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event){
    this.myClass = false;
  }

}
