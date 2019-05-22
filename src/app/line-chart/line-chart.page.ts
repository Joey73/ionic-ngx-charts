import { Component, OnInit } from '@angular/core';
import {single, multi} from '../../assets/data/data';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.page.html',
  styleUrls: ['./line-chart.page.scss'],
})
export class LineChartPage implements OnInit {
  title = 'ngx Line Chart with Ionic 4';

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
