import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TortillaPatataPage } from './tortilla-patata.page';

const routes: Routes = [
  {
    path: '',
    component: TortillaPatataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TortillaPatataPageRoutingModule {}
