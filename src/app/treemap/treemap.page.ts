import { Component, OnInit } from '@angular/core';

import { treemapData } from '../../assets/data/treemapData';

// https://stackblitz.com/edit/custom-colors-tree-map?file=app%2Fapp.component.ts

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.page.html',
  styleUrls: ['./treemap.page.scss'],
})
export class TreemapPage implements OnInit {
  title = 'ngx Treemap with Ionic 4';

  treemapData: any[];

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
