import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CosmeRecipes } from './cosmeRecipes';

@NgModule({
  declarations: [
    CosmeRecipes,
  ],
  imports: [
    IonicPageModule.forChild(CosmeRecipes),
  ],
  exports: [
    CosmeRecipes
  ]
})
export class CosmeRecipesPageModule {}
