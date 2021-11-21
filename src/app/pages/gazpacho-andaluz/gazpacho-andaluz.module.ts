import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GazpachoAndaluzPageRoutingModule } from './gazpacho-andaluz-routing.module';

import { GazpachoAndaluzPage } from './gazpacho-andaluz.page';
import { IngredientesGazpachoComponent } from 'src/app/components/ingredientes-gazpacho/ingredientes-gazpacho.component';
import { GazpachoImgComponent } from 'src/app/components/gazpacho-img/gazpacho-img.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GazpachoAndaluzPageRoutingModule
  ],
  declarations: [GazpachoAndaluzPage, IngredientesGazpachoComponent, GazpachoImgComponent]
})
export class GazpachoAndaluzPageModule {}
