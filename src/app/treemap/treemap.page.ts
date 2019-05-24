import { Component, OnInit } from '@angular/core';

import { single } from '../../assets/data/treemapData';

// https://stackblitz.com/edit/custom-colors-tree-map?file=app%2Fapp.component.ts

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.page.html',
  styleUrls: ['./treemap.page.scss'],
})
export class TreemapPage implements OnInit {
  title = 'ngx Treemap with Ionic 4';

  single: any[];
  multi: any[];

  // view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#4381D1', '#65ECE4']
  };

  constructor() {
    Object.assign(this, { single });
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

    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }
}
