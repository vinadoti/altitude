import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TreinosPageRoutingModule } from './treinos-routing.module';
import { TreinosPage } from './treinos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinosPageRoutingModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TreinosPage }])
  ],
  declarations: [TreinosPage]
})
export class TreinosPageModule {}
