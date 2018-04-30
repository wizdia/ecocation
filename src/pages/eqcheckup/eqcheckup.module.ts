import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Eqcheckup } from './eqcheckup';

@NgModule({
  declarations: [
    Eqcheckup,
  ],
  imports: [
    IonicPageModule.forChild(Eqcheckup),
  ],
  exports: [
    Eqcheckup
  ]
})
export class EqcheckupPageModule {}
