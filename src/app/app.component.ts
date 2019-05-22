import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Bar Chart',
      url: '/bar-chart',
      icon: 'podium'
    },
    {
      title: 'Pie Chart',
      url: '/pie-chart',
      icon: 'pie'
    },
    {
      title: 'Donut Chart',
      url: '/donut-chart',
      icon: 'radio-button-off'
    },
    {
      title: 'Line Chart',
      url: '/line-chart',
      icon: 'pulse'
    },
    {
      title: 'Treemap',
      url: '/treemap',
      icon: 'grid'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
