import { Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';

export const routes: Routes = [
    {
        path: 'bar-chart',
        component: BarChartComponent,
        pathMatch: 'full'
    }, 
    {
      path: '**',
        redirectTo: 'bar-chart',
        pathMatch: 'full'  
    }

];
