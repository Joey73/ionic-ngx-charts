import { Component, OnInit } from '@angular/core';

import {single, multi} from '../../assets/data/data';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.page.html',
  styleUrls: ['./donut-chart.page.scss'],
})
export class DonutChartPage implements OnInit {
  title = 'ngx Donut Chart with Ionic 4';

  single: any[];
  multi: any[];

  // view: any[] = [700, 400];
  gradient = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi});
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.drawChart();
  }

  drawChart() {
    this.gradient = false;

    this.colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    Object.assign(this, {single, multi});
  }

  onSelect(event) {
    console.log(event);
  }
}
