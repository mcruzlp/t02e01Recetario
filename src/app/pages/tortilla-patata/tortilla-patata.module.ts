import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TortillaPatataPageRoutingModule } from './tortilla-patata-routing.module';

import { TortillaPatataPage } from './tortilla-patata.page';
import { IngredientesTortillaComponent } from 'src/app/components/ingredientes-tortilla/ingredientes-tortilla.component';
import { TortillaImgComponent } from 'src/app/components/tortilla-img/tortilla-img.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TortillaPatataPageRoutingModule
  ],
  declarations: [TortillaPatataPage, IngredientesTortillaComponent, TortillaImgComponent]
})
export class TortillaPatataPageModule {}
