import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumenesPage } from './resumenes';

@NgModule({
  declarations: [
    ResumenesPage,
  ],
  imports: [
    IonicPageModule.forChild(ResumenesPage),
  ],
})
export class ResumenesPageModule {}
