import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HappyPage } from './happy';

@NgModule({
  declarations: [
    HappyPage,
  ],
  imports: [
    IonicPageModule.forChild(HappyPage),
  ],
})
export class HappyPageModule {}
