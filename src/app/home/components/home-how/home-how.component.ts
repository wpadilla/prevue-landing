import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-how',
  templateUrl: './home-how.component.html',
  styleUrls: ['./home-how.component.scss']
})
export class HomeHowComponent implements OnInit {

  constructor() { }
  steps = [{
    title: `Put Yourself <br/> Out There`,
    explain: `Start by taking a 22 second video of you; the real
      you. No filters, no bs, just tell the world who you
      are and what you're looking for`,
    image: 'assets/images/carousel/Carousel-Step1.png',
    numberBackground: 'assets/images/backgrounds/number-1.png',
    number: 'one',
  },
    {
      title: `"PreVue" <br />Potential Matches`,
      explain: `View our video-only feed and see what's out there!
      Choose with confidence knowing that everyone you
      see is as authentic and unfiltered as you are.`,
      image: 'assets/images/carousel/Carousel-Step2.png',
      numberBackground: 'assets/images/backgrounds/number-2.png',
      number: 'two',
    },
    {
      title: `Connect!`,
      explain: `It's a match - harness the excitement and view
      their full profile, then start a conversation via
      chat or video. If the vibe continues...meet up irl!`,
      image: 'assets/images/carousel/Carousel-Step3.png',
      numberBackground: 'assets/images/backgrounds/number-3.png',
      number: 'three',

    }
  ];


  ngOnInit(): void {
  }

}
