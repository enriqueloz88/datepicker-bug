import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.page.html',
  styleUrls: ['./date-picker.page.scss'],
})
export class DatePickerPage implements OnInit {
  date: any;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss(e) {
    if (e.target.id == 'background') {
      this.modalCtrl.dismiss();
    }
  }

  confirm() {
    const datetime = <any>document.querySelector('#picker');
    datetime.confirm().then((res) => {
      this.modalCtrl.dismiss(new Date(this.date));
    });
  }
}
