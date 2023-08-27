import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {  TitleAuthPagesComponentModule } from '../../components/title-auth-pages/title-auth-pages.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    TitleAuthPagesComponentModule
  ],
    declarations: [LoginPage]
})
export class LoginPageModule {}
