import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

let dataServiceInstance: any;

export const routes: Routes = [
  {
    path: 'bar-chart',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './BarChartComponent'
      }).then(m => m.BarChartComponent),
  },
  {
    path: '',
    redirectTo: 'bar-chart',
    pathMatch: 'full'
  }
];
