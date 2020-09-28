import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMaxUpvoteHighlighter]'
})
export class MaxUpvoteHighlighterDirective {

  constructor(private elem: ElementRef) {
    //console.log('Elem:', elem);
    this.elem.nativeElement.style.background = '#17a2b8';
  }


}
