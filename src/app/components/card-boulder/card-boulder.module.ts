import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardBoulderComponent } from './card-boulder.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [CardBoulderComponent],
    exports: [CardBoulderComponent]
})
export class CardBoulderComponentModule {}
