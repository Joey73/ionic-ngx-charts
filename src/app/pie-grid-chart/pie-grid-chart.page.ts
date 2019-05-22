import { Component, OnInit } from '@angular/core';

import {single, multi} from '../../assets/data/data';

@Component({
  selector: 'app-pie-grid-chart',
  templateUrl: './pie-grid-chart.page.html',
  styleUrls: ['./pie-grid-chart.page.scss'],
})
export class PieGridChartPage implements OnInit {
  title = 'ngx Pie Grid Chart with Ionic 4';

  single: any[];
  multi: any[];

  // view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, {single, multi})   
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
}
