import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import {LendBookPage} from "../lend-book/lend-book";

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  booksList = [
      {
        name: 'Croc-Blanc',
        author: 'Jack London'
      },
      {
        name: 'Le comte de Monte-Cristo',
        author: 'Alexandre Dumas'
      },
      {
        name: 'Robinson Crusoé',
        author: 'Daniel Defoë'
      }
  ];

  constructor(public modalCtrl: ModalController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
  }

  onLoadBook(book: {name: string, author: string}) {
      let modal = this.modalCtrl.create(LendBookPage, {book: book});
      modal.present();
  }

}
