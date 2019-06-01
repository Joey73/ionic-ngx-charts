import { Component, OnInit } from '@angular/core';

import { treemapData } from '../../assets/data/treemapData';

@Component({
  selector: 'app-treemap-in-slide',
  templateUrl: './treemap-in-slide.page.html',
  styleUrls: ['./treemap-in-slide.page.scss'],
})
export class TreemapInSlidePage implements OnInit {
  title = 'ngx Treemap in Slider with Ionic 4';

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  treemapData: any[];
  multi: any[];

  // view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#4381D1', '#65ECE4']
  };

  constructor() {
    Object.assign(this, { treemapData });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.drawChart();
  }

  drawChart() {
    // this.title = 'ngx Treemap with Ionic 4';

    this.colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#4381D1', '#65ECE4']
    };

    Object.assign(this, { treemapData });
  }

  onSelect(event) {
    console.log(event);
  }

  onResize(event) {
    // this.view = [event.target.innerWidth - 900, 280 ];
    this.drawChart();
  }
}
