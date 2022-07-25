import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {
  }

  visibleSidebar = false;
  enableWhiteNavbar = false;
  screenMode: 'xs' | 'md' | 'lg' | 'xl' = 'xl'
  ngOnInit(): void {
    this.toggleNavbar();
    this.onResize();
  }

  toggleNavbar() {
    this.enableWhiteNavbar = location.pathname.includes('mission') || location.pathname.includes('terms') || location.pathname.includes('policy') ;
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        const {url} = event;
        console.log(event, "event");
        this.enableWhiteNavbar = url.includes('mission') || url.includes('policy') || url.includes('terms');
      }
    })
  }

  goTo(path: string) {
    if(path.includes("#")) {
      const element: any = document.querySelector(path);

      if(element){
        window.scrollTo({top: element.offsetTop, behavior: 'smooth'});
      } else {
        this.router.navigate(['']);
      }

    } else {
      this.router.navigate([path]);
    }

    this.visibleSidebar = false;

  }

  //Setup @HostListener to listen to changes
  @HostListener('window:resize', ['$event'])
  onResize() {
    let screenWidth=window.innerWidth;

    if(screenWidth<768)
    {
      this.screenMode="md"
    } else {
      this.screenMode = 'lg';
    }
  }

}
