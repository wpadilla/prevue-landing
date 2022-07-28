import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements AfterViewInit {

  constructor() {
  }

  @ViewChild('aboutVideo') aboutVideo: ElementRef<HTMLVideoElement> = {} as any;
  @ViewChild('homeAbout') homeContainer: ElementRef<HTMLDivElement> = {} as any;

  ngAfterViewInit(): void {

    if(window.innerWidth < 768) {
      this.aboutVideo.nativeElement.controls = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.scrollY > this.homeContainer.nativeElement.offsetTop - 200 && window.scrollY < this.homeContainer.nativeElement.offsetTop + 400) {
      document.querySelector('body')?.click();
      this.aboutVideo.nativeElement.muted = true;
      this.aboutVideo.nativeElement.paused && this.aboutVideo.nativeElement.play();
    }
  }
}
