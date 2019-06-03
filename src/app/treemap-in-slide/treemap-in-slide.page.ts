import { Component, OnInit } from '@angular/core';

import { treemapData } from '../../assets/data/treemapData';

@Component({
  selector: 'app-treemap-in-slide',
  templateUrl: './treemap-in-slide.page.html',
  styleUrls: ['./treemap-in-slide.page.scss'],
})
export class TreemapInSlidePage implements OnInit {
  title = 'ngx Treemap in Slider with Ionic 4';

  treemapData: any[];

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#4381D1', '#65ECE4']
  };

  constructor() {
    if (innerWidth > 992) {
      this.view = [innerWidth - 290, 400];
    } else {
      this.view = [innerWidth, 400];
    }
    Object.assign(this, { treemapData });
  }

  ngOnInit() {
  }

  onResize(event) {
    if (event.target.innerWidth > 992) {
      this.view = [event.target.innerWidth - 290, 400];
    } else {
      this.view = [event.target.innerWidth, 400];
    }
  }

  onSelect(event: Event) {
    console.log(event);
  }
}
