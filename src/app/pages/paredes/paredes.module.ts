import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParedesPage } from './paredes.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ParedesPage }])
  ],
  declarations: [ParedesPage]
})
export class ParedesPageModule {}
