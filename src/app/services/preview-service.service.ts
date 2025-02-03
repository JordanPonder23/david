import {
  ComponentFactoryResolver,
  Injectable,
  Inject
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { HomePageComponent } from '../pages/home/home.component';
import { ProjectPageComponent } from '../pages/projects/projects.component';


@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  private messageSource = new BehaviorSubject('home');
  currentMessage = this.messageSource.asObservable(); // look at observables
  
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  getMessage():Observable<string> {
    return this.currentMessage; // look where this is used in the preview.component.ts file
    /*
     * this function returns a special type of object, "Observable" which can be 
     * unpacked (within the call back function that you see being integrated with the 
     * .subscribe call in the preview.component.ts)
     */
  }


}
