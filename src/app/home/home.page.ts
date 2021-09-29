import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePickerPage } from '../components/date-picker/date-picker.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedTime: Date;

  constructor(private modalCtrl: ModalController) {}

  dateModal: HTMLIonModalElement;

  async openDateModal() {
    this.dateModal = await this.modalCtrl.create({
      component: DatePickerPage,
      cssClass: 'modal-with-transparency',
    });

    this.dateModal.onDidDismiss().then((data) => {
      this.selectedTime = data.data;
    });

    return this.dateModal.present();
  }
}
