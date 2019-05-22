import { Component, OnInit } from '@angular/core';

import { single } from '../../assets/data/data';

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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
}
