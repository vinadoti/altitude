import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseLoginPage } from './choose-login.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseLoginPageRoutingModule {}
