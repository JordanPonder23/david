import { AfterViewInit, Component, ComponentRef, ElementRef, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewService } from '../services/preview-service.service';
import { HomePageComponent } from '../pages/home/home.component';
import { ProjectPageComponent } from '../pages/projects/projects.component';

@Component({
  selector: 'preview-holder',
  imports: [RouterOutlet, HomePageComponent, ProjectPageComponent],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewHolderComponent {
  title = 'david-app';
  previewService: PreviewService = inject(PreviewService);
  selector = "test"

  @ViewChild('editor') editor!: ElementRef <HTMLElement> ; //not used

    private compRef!: ComponentRef<ProjectPageComponent>; //not used
    private viewContainerRef:ViewContainerRef // not used

  constructor(private _ViewContainerRef: ViewContainerRef) {
    this.viewContainerRef = _ViewContainerRef; // not used
    this.grabPreviewState();
  }


  
  private grabPreviewState(): string {
    // look how rxjs works and what .subscribe does
    this.previewService.getMessage().subscribe({
        next: (msg) => {
            console.log(msg)
            this.selector = "<"+msg+"-page"+">" + "</"+msg+"-page"+">";
        },
        error: (error) => {
            console.error('Error fetching user:', error);
        }
    });
    return this.selector;
}
  
}