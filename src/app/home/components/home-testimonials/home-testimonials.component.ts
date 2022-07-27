import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.scss']
})
export class HomeTestimonialsComponent implements OnInit {

  constructor() { }
  testimonials = [{
    quote: `You know what they
            say...love is blind.`,
    author: "Tommy W",
  },
    {
      quote: `You know what they
            say...love is blind.`,
      author: "John Doe",
    },
    {
      quote: `You know what they
            say...love is blind.`,
      author: "Luke M",
    },
    {
      quote: `You know what they
            say...love is blind.`,
      author: "Marc S",
    }
  ];
  ngOnInit(): void {
  }

}
