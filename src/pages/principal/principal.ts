import { SeguridadProvider } from './../../providers/seguridad/seguridad';
import { SqlManagerProvider } from './../../providers/sql-manager/sql-manager';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { tbConfig } from '../../estructuraBD/tbConfig';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public sqlman:SqlManagerProvider, public seg:SeguridadProvider) {    
  }

  ionViewDidLoad() {
    this.seg.mostrarPin();
    console.log('ionViewDidLoad PrincipalPage');
  }

}
