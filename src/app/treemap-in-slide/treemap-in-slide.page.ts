import { Component, OnInit } from '@angular/core';

import { treemapData } from '../../assets/data/treemapData';

@Component({
  selector: 'app-treemap-in-slide',
  templateUrl: './treemap-in-slide.page.html',
  styleUrls: ['./treemap-in-slide.page.scss'],
})
export class TreemapInSlidePage implements OnInit {
  title = 'ngx Treemap in Slider with Ionic 4';

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#4381D1', '#65ECE4']
  };

  constructor() {
    Object.assign(this, { treemapData });
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
}
