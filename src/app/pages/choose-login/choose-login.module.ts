import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseLoginPageRoutingModule } from './choose-login-routing.module';

import { ChooseLoginPage } from './choose-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseLoginPageRoutingModule
  ],
  declarations: [ChooseLoginPage]
})
export class ChooseLoginPageModule {}
