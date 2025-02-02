import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'wheel-menu',
  imports: [RouterOutlet],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.css'
})
export class WheelComponent {
  title = 'david-app';
}