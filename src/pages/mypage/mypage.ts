import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { Chart } from 'chart.js';
//import { ShareModal } from '../share-modal/share-modal';



@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class Mypage {
  @ViewChild('doughnutCanvasEQ') doughnutCanvasEQ;
  @ViewChild('doughnutCanvasPQ') doughnutCanvasPQ;

  @ViewChild('lineCanvasEQ') lineCanvasEQ;
  @ViewChild('lineCanvasPQ') lineCanvasPQ;

  doughnutChartEQ : any;
  doughnutChartPQ : any;

  lineChartEQ : any;
  lineChartPQ : any;


  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.platform.ready().then(() => {
      this.ionViewDidLoad()
    })
  }

  ionViewDidLoad() {
    this.doughnutChartEQ = new Chart(this.doughnutCanvasEQ.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["위험", "경고", "좋음"],
        datasets: [{
          label: '# of Votes',
          data: [2, 6, 15],
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

    this.doughnutChartPQ = new Chart(this.doughnutCanvasPQ.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["위험", "경고", "좋음"],
        datasets: [{
          label: '# of Votes',
          data: [2, 16, 5],
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


    this.lineChartEQ = new Chart(this.lineCanvasEQ.nativeElement, {

      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "종합환경지수(EG)",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [35, 49, 50, 31, 56, 65, 70],
            spanGaps: false,
          }
        ]
      }

    });


    this.lineChartPQ = new Chart(this.lineCanvasPQ.nativeElement, {

      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "종합자세지수(PG)",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [45, 59, 80, 81, 76, 85, 90],
            spanGaps: false,
          }
        ]
      }

    });



  }


}
