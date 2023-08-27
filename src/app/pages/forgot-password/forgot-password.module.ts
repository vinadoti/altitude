import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';
import {TitleAuthPagesComponentModule} from '../../components/title-auth-pages/title-auth-pages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule,
    TitleAuthPagesComponentModule
  ],
  declarations: [ForgotPasswordPage]
})
export class ForgotPasswordPageModule {}
