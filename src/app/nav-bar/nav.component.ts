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
    constructor() {

    }

    private setupListeners() {
        const prev = document.getElementById('previewPane') as HTMLDivElement;
        const homeLi = document.getElementById('homeLI') as HTMLAnchorElement;

        homeLi.addEventListener('mouseover', () => {
           // console.log(this.grabPreviewState())
            prev.classList.add("fade-in");
            this.previewService.changeMessage("home")

        });
        homeLi.addEventListener('mouseout', () => {
            prev.classList.remove("fade-in")
            prev.style.opacity = '0';
        });

        const aboutLi = document.getElementById('aboutLI') as HTMLAnchorElement;


        aboutLi.addEventListener('mouseover', () => {
           // console.log(this.grabPreviewState())
            prev.classList.add("fade-in");
            this.previewService.changeMessage("about")

        });
        aboutLi.addEventListener('mouseout', () => {
            prev.classList.remove("fade-in")
            prev.style.opacity = '0';
        });

        const projectsLi = document.getElementById("projectsLI") as HTMLAnchorElement;

        projectsLi.addEventListener('mouseover', () => {
         //   console.log(this.grabPreviewState())
            prev.classList.add("fade-in");
            this.previewService.changeMessage("projects")

        });
        projectsLi.addEventListener('mouseout', () => {
            prev.classList.remove("fade-in")
            prev.style.opacity = '0';
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
        //    console.log(this.grabPreviewState())
            prev.classList.add("fade-in");
            this.previewService.changeMessage("contact")

        });
        contactsLi.addEventListener('mouseout', () => {
            prev.classList.remove("fade-in")
            prev.style.opacity = '0';
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