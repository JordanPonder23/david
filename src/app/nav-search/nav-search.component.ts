import { Component } from '@angular/core';
import { SearchfuzzyDirective } from '../searchfuzzy/searchfuzzy.directive';


@Component({
  standalone:true,
  selector: 'app-nav-search',
  imports: [SearchfuzzyDirective],
  templateUrl: './nav-search.component.html',
  styleUrl: './nav-search.component.css'
})
export class NavSearchComponent {

  constructor() {
    


    }
}
