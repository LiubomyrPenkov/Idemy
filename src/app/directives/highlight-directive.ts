import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @Input() appHighlight: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightElement(this.appHighlight ? '#c5e2c6ed' : '#fec6b3');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightElement('');
  }

  private highlightElement(color: string) {
    this.el.nativeElement.style.background = color;
  }
}
