import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Eqchecklist } from './eqchecklist';

@NgModule({
  declarations: [
    Eqchecklist,
  ],
  imports: [
    IonicPageModule.forChild(Eqchecklist),
  ],
  exports: [
    Eqchecklist
  ]
})
export class EqchecklistPageModule {}
