import { Directive, ElementRef, Renderer2, HostListener, inject } from '@angular/core';
import { PreviewService } from './services/preview-service.service';

@Directive({
  standalone: true,
  selector: '[appPreviewdirective]'
})
/**
 * This is the proper way to operate in the dom through Angular. This takes
 * away the concern in waiting for the dom to render using Renderer2 
 * 
 * Directives need to be declared as 'standalone' since Angular 17+ 
 */
export class PreviewdirectiveDirective {
  previewService: PreviewService = inject(PreviewService);
  currentPrev: string = "home"
  pointable: Number = 1

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
    console.log("BIG Home: "+this.grabPreviewState() + ", from in: " + this.pointable);
    var title = this.el.nativeElement.id;

    var pane = this.el.nativeElement.parentNode.parentNode.parentNode.nextElementSibling

    if(!pane.classList.contains("fade-in")) {
    switch(title) {
      case "homeLI":
        this.previewService.changeMessage("home")
        break;
      case "aboutLI":
        this.previewService.changeMessage("about")
        break;
      case "projectsLI":
        this.previewService.changeMessage("projects")
        break
      case "contactLI":
        this.previewService.changeMessage("contact")
        break
    };
    pane.classList.add("fade-in");
  }


    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("BIG Home: "+this.grabPreviewState() + ", from in: " + this.pointable);
    var pane = this.el.nativeElement.parentNode.parentNode.parentNode.nextElementSibling

    pane.classList.remove('fade-in')
    this.renderer.setStyle(pane, "opacity", 0)
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }

  /*
   * I'll just let the Directives handle all the communication between
   * services and the templates through subscriptions like this to observables 
   * updated by the services
   */
  private grabPreviewState(): string {
    this.previewService.getMessage().subscribe({
        next: (msg) => {
            console.log(msg)
            this.currentPrev = msg;
        },
        error: (error) => {
            console.error('Error fetching user:', error);
        }
    });
    return this.currentPrev;
  }
}
