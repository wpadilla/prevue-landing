import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit {

  constructor() {
  }

  @ViewChild('aboutVideo') aboutVideo: ElementRef<HTMLVideoElement> = {} as any;
  @ViewChild('homeAbout') homeContainer: ElementRef<HTMLDivElement> = {} as any;

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.scrollY === this.homeContainer.nativeElement.offsetTop - 200) {
      this.aboutVideo.nativeElement.paused && this.aboutVideo.nativeElement.play();
    }
  }
}
