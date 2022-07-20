import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit {

  constructor() { }
  @ViewChild('aboutVideo') aboutVideo: ElementRef<HTMLVideoElement> = {} as any;

  ngOnInit(): void {
  }

}
