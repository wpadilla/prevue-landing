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
  enableMissionNavbar = false;
  screenMode: 'xs' | 'md' | 'lg' | 'xl' = 'xl'
  ngOnInit(): void {
    this.toggleNavbar();
    this.onResize();
  }

  toggleNavbar() {
    this.enableMissionNavbar = location.pathname.includes('mission');
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        const {url} = event;
        console.log(event, "event");
        this.enableMissionNavbar = url.includes('mission')
      }
    })
  }

  goTo(path: string) {
    this.router.navigate([path]);
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
