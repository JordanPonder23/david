import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewService } from '../../services/preview-service.service';

@Component({
  selector: 'projects-page',
  imports: [RouterOutlet],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectPageComponent {
  title = 'david-app';
  previewService: PreviewService = inject(PreviewService);
  selector = "test"

  constructor() {
  }
  

  
}