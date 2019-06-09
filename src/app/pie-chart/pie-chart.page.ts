import { Component, OnInit } from '@angular/core';

import {single, multi} from '../../assets/data/data';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.page.html',
  styleUrls: ['./pie-chart.page.scss'],
})
export class PieChartPage implements OnInit {
  title = 'ngx Pie Chart with Ionic 4';

  single: any[];
  multi: any[];

  // view: any[] = [700, 400];

  // options
  showLegend = true;
  gradient = false;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    Object.assign(this, { single, multi });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.drawChart();
  }

  onSelect(event) {
    console.log(event);
  }

  drawChart() {
    // options
    this.showLegend = true;
    this.gradient = false;
    this.colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    // pie
    this.showLabels = true;
    this.explodeSlices = false;
    this.doughnut = false;

    Object.assign(this, { single, multi });
  }

}
