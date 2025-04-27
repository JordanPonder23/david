import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appSearchfuzzy]'
})
export class SearchfuzzyDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
    console.log(event)
    console.log(event.offsetX)
    //event.screenX
    
    const imageUrl = '/assets/background.png'
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 3s');
 //   this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', `url(${imageUrl})`);
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    if(event.offsetX>300) {
    this.renderer.setStyle(this.el.nativeElement, 'margin-left', (event.offsetX)+"px");
    this.renderer.setStyle(this.el.nativeElement, 'transition', "margin-left 1s linear");
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
   // console.log(this.el.nativeElement)
   // this.renderer.removeStyle(this.el.nativeElement, 'backgroundImage');
   this.renderer.setStyle(this.el.nativeElement, 'margin-left',"0px");
  // this.renderer.setStyle(this.el.nativeElement, 'transition', "");
  }
}
