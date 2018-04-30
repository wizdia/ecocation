import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contents } from './contents';

@NgModule({
  declarations: [
    Contents,
  ],
  imports: [
    IonicPageModule.forChild(Contents),
  ],
  exports: [
    Contents
  ]
})
export class ContentsPageModule {}
