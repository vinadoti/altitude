import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import {TitleAuthPagesComponentModule} from '../../components/title-auth-pages/title-auth-pages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    TitleAuthPagesComponentModule
  ],
    declarations: [SignUpPage]
})
export class SignUpPageModule {}
