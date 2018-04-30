import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Platform } from 'ionic-angular';
import { Chart } from 'chart.js';

declare var google;
@IonicPage()
@Component({
  selector: 'page-eqchecklist',
  templateUrl: 'eqchecklist.html',
})
export class Eqchecklist {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart : any;
  officeMonitorEQ : string;
  officeChairEQ : string;


  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {

    this.platform.ready().then(() => {
      this.ionViewDidLoad()
    })
  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["위험", "경고", "좋음"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#FFCE56",
            "#36A2EB"
          ]
        }]
      }

    });
  }


  listshow(){

  }




}
