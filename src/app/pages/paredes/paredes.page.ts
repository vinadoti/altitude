import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-paredes',
  templateUrl: 'paredes.page.html',
  styleUrls: ['paredes.page.scss']
})
export class ParedesPage {

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Paredes',
      buttons: [{
        text: 'Excluir parede',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }
}
