import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Platform } from 'ionic-angular';



declare var google;
@IonicPage()
@Component({
  selector: 'page-eqcheckup',
  templateUrl: 'eqcheckup.html',
})
export class Eqcheckup {


  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {

    this.platform.ready().then(() => {
      this.toggleshowbtn()
    })
  }


  toggleshowbtn(){

  }
  movetoOfficeChecklist(){

  }

  //goTo function
  goTo(page){
    this.navCtrl.push(page);
  }



}
