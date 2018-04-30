import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pqcheckup } from './Pqcheckup';


@NgModule({
  declarations: [
    Pqcheckup,
  ],
  imports: [
    IonicPageModule.forChild(Pqcheckup),
  ],
  exports: [
    Pqcheckup
  ]
})
export class PqcheckupPageModule {}

