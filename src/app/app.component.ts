import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WheelComponent } from './wheel-menu/wheel.component';
import {NavComponent} from './nav-bar/nav.component';
import {FooterComponent} from './footer/footer.component';
import {PosterComponent} from './poster/poster.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent,FooterComponent, PosterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'david-app';
 
}
