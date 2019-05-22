import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'bar-chart', loadChildren: './bar-chart/bar-chart.module#BarChartPageModule' },
  { path: 'donut-chart', loadChildren: './donut-chart/donut-chart.module#DonutChartPageModule' },
  { path: 'line-chart', loadChildren: './line-chart/line-chart.module#LineChartPageModule' },
  { path: 'pie-chart', loadChildren: './pie-chart/pie-chart.module#PieChartPageModule' },
  { path: 'treemap', loadChildren: './treemap/treemap.module#TreemapPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
