import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitleAuthPagesComponent } from './title-auth-pages.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [TitleAuthPagesComponent],
    exports: [TitleAuthPagesComponent]
})
export class TitleAuthPagesComponentModule {}
