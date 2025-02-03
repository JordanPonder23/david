import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewService } from '../../services/preview-service.service';

@Component({
  selector: 'home-page',
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePageComponent {
  title = 'david-app';
  previewService: PreviewService = inject(PreviewService);
  selector = "test"

  constructor() {
  }
  

  
}