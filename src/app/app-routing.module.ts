import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tortilla-patata',
    loadChildren: () => import('./pages/tortilla-patata/tortilla-patata.module').then( m => m.TortillaPatataPageModule)
  },
  {
    path: 'gazpacho-andaluz',
    loadChildren: () => import('./pages/gazpacho-andaluz/gazpacho-andaluz.module').then( m => m.GazpachoAndaluzPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
