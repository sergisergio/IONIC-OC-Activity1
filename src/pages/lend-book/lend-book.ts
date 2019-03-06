import { Component, OnInit } from '@angular/core';
import {NavController, NavParams, AlertController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit  {

  book: {
    name: string,
    author: string
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.book = this.navParams.get('book');
  }


    ionViewDidLoad() {
    console.log('ionViewDidLoad LendBookPage');
  }

  onLendBook() {
      let alert = this.alertCtrl.create({
          title: 'Êtes-vous certain(e) de vouloir continuer ?',
          subTitle: 'Ce livre sera prêté !',
          buttons: [
              {
                  text: 'Annuler',
                  role: 'cancel'
              },
              {
                  text: 'Confirmer',
                  handler: () => console.log('Confirmé !')
              }
          ]
      });
      alert.present();
  }

  onGiveBackBook() {
      let alert = this.alertCtrl.create({
          title: 'Êtes-vous certain(e) de vouloir continuer ?',
          subTitle: 'Ce livre sera rendu !',
          buttons: [
              {
                  text: 'Annuler',
                  role: 'cancel'
              },
              {
                  text: 'Confirmer',
                  handler: () => console.log('Confirmé !')
              }
          ]
      });
      alert.present();
  }

  dismissModal() {
      this.viewCtrl.dismiss();
  }
}
