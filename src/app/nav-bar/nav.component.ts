import { AfterViewInit, Component, inject, AfterContentInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewHolderComponent } from '../preview-holder/preview.component';
import { PreviewService } from '../services/preview-service.service';


@Component({
    selector: 'nav-bar',
    imports: [RouterOutlet, PreviewHolderComponent],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css'
})
export class NavComponent implements AfterViewInit {
    title = 'david-app';
    previewService: PreviewService = inject(PreviewService);
    currentPrev: string = "home"
    pointable: Number = 1
    constructor() {

    }

    private setupListeners() {
        const prev = document.getElementById('previewPane') as HTMLDivElement;
        const homeLi = document.getElementById('homeLI') as HTMLAnchorElement;

        homeLi.addEventListener('mouseover', () => {
            console.log("Home: "+this.grabPreviewState() + ", from in: " + this.pointable)
            // && this.grabPreviewState() != "home"
            if(!prev.classList.contains("fade-in")  ) {
                this.previewService.changeMessage("home")
                prev.classList.add("fade-in");
                this.pointable = 1
            }

        });
        homeLi.addEventListener('mouseout', () => {
            console.log("Home out: "+this.grabPreviewState() + ", from in: " + this.pointable)
        // if(this.pointable == 1) {
            var fadeIn =  document.getElementsByClassName('fade-in') as HTMLCollection
            for (var i = 0; i < fadeIn.length; i++) {
                var el = fadeIn[i] as HTMLElement
                el.classList.remove("fade-in")
                el.style.opacity = '0';
            }
            this.pointable = 0
       // }
        
        });

        const aboutLi = document.getElementById('aboutLI') as HTMLAnchorElement;

        aboutLi.addEventListener('mouseover', () => {
            console.log("about: "+this.grabPreviewState() + ", from in: " + this.pointable)
            
           if(!prev.classList.contains("fade-in")) {
            this.previewService.changeMessage("about")
                prev.classList.add("fade-in");
                
            }

        });
        aboutLi.addEventListener('mouseout', () => {
            console.log("about out: "+this.grabPreviewState() + ", from in: " + this.pointable)
        //    if(this.pointable == 1) {
            var fadeIn =  document.getElementsByClassName('fade-in') as HTMLCollection
            for (var i = 0; i < fadeIn.length; i++) {
                var el = fadeIn[i] as HTMLElement
                el.classList.remove("fade-in")
                el.style.opacity = '0';
                }
         //   }
        });

        const projectsLi = document.getElementById("projectsLI") as HTMLAnchorElement;

        projectsLi.addEventListener('mouseover', () => {
            console.log("Projects: "+this.grabPreviewState() + ", from in: " + this.pointable)
        
            if(!prev.classList.contains("fade-in")) {
                this.previewService.changeMessage("projects")
              prev.classList.add("fade-in");
            
            }

        });
        projectsLi.addEventListener('mouseout', () => {
            console.log("Projects out: "+this.grabPreviewState() + ", from in: " + this.pointable)
         //   if(this.pointable == 1) {
            var fadeIn =  document.getElementsByClassName('fade-in') as HTMLCollection
            for (var i = 0; i < fadeIn.length; i++) {
                var el = fadeIn[i] as HTMLElement
                el.classList.remove("fade-in")
                el.style.opacity = '0';
                }
         //  }
        });
        /*
        const extrasLi = document.getElementById("extrasLI") as HTMLAnchorElement;

        extrasLi.addEventListener('mouseover', () => {
          //  console.log(this.grabPreviewState())
            prev.classList.add("fade-in");
            this.previewService.changeMessage("extras")

        });
        extrasLi.addEventListener('mouseout', () => {
            console.log("extras mouse out ")
            prev.classList.remove("fade-in")
            prev.style.opacity = '0';
        });
        */

        const contactsLi = document.getElementById("contactLI") as HTMLAnchorElement;

        contactsLi.addEventListener('mouseover', () => {
            console.log("Contact: "+this.grabPreviewState() + ", from in: " + this.pointable)
            
            if(!prev.classList.contains("fade-in")) {
                this.previewService.changeMessage("contact")
                prev.classList.add("fade-in");
            }

        });
        contactsLi.addEventListener('mouseout', () => {
            console.log("Contact out: "+this.grabPreviewState() + ", from in: " + this.pointable)
        //    if(this.pointable == 1) {
            var fadeIn =  document.getElementsByClassName('fade-in') as HTMLCollection
            for (var i = 0; i < fadeIn.length; i++) {
                var el = fadeIn[i] as HTMLElement
                el.classList.remove("fade-in")
                el.style.opacity = '0';
               }
        //   }
        });
    }

    ngAfterViewInit(): void {

        async function onReady() {
            if (document.readyState !== 'loading') {
                return;
            }
            await new Promise((resolve) => {
                document.addEventListener('DOMContentLoaded', resolve);
            });
        }
        (async () => {
            await onReady();
    
            this.setupListeners()
            
        })();
    }

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