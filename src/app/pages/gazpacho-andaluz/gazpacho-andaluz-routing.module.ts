import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GazpachoAndaluzPage } from './gazpacho-andaluz.page';

const routes: Routes = [
  {
    path: '',
    component: GazpachoAndaluzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GazpachoAndaluzPageRoutingModule {}
