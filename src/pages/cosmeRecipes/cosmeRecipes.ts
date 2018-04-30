import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cosmeRecipes',
  templateUrl: 'cosmeRecipes.html',
})
export class CosmeRecipes {
  train = 3;
  trainvalue: any;
  textChangeTrain: any;
  funcItems: any;

  effectItems: any;
  effectMoisture = false;
  effectWrinkle = false;
  effectWhitening = false;
  effectWhiteningPlus = false;
  water = 0;
  oliverewax = 0;
  gms = 0;

  vegioilSelected = [
    {key: "0", sppinerNo:1, value:"올리브오일" },
    {key: "0", sppinerNo:2, value:"곰수지" },
    {key: "0", sppinerNo:2, value:"콩기름" },
  ];

  vegioils : any;

  recipe : any;


  constructor(public platform: Platform, public navCtrl: NavController,
              public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
      this.platform.ready().then(() => {
      this.toggleshowbtn();
        this.textChangeTrain = ["악건성", "건성", "중성", "지성", "악지성"];
        this.trainvalue = this.textChangeTrain[2];
        this.funcItems = [ "보습"  , "주름"  , "미백", "미백+" ];

        this.effectItems = [
          { key: "0" ,value: "여드름/트러블" },
          { key: "1" ,value: "아토피" },
          { key: "2" ,value: "모세혈관확장" },
          { key: "3" ,value: "모공축소" },
          { key: "4" ,value: "노화방지" },
          { key: "5" ,value: "피부재생" },
          { key: "6" ,value: "가려움/진정" },
          { key: "7" ,value: "민감성피부" },

        ];

        this.vegioils = [
          {key:0, value:"올리브오일"},
          {key:1, value:"콩기름"},
          {key:2, value:"곰수지"},
          {key:3, value:"코코넛오일"},
          {key:4, value:"호호바오일"},
        ];

        this.recipe = [
          {key:0, type:"vegioil", id:"vegioil1", value:"올리브오일", amount:10 },
          {key:1, type:"vegioil", id:"vegioil2", value:"콩기름", amount:8 },
          {key:2, type:"vegioil", id:"vegioil3", value:"곰수지", amount:6 },
          {key:3, type:"func", id:"func1", value:"나이아신마이드", amount:5 },
          {key:4, type:"func", id:"func2", value:"식물성플라센타", amount:3 },
          {key:5, type:"ess", id:"ess1", value:"레몬EO", amount:0.25 },
          {key:6, type:"ess", id:"ess2", value:"로즈마리EO", amount:0.25 },


        ];

    })

  }

  toggleshowbtn(){
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  buttononoff(text){
    if(text == 'wrinkle' ){

      this.effectWrinkle = !this.effectWrinkle;
      var oInput = document.getElementById("wrinkle");
      oInput.setAttribute('class', '')

    }

  }
  onChangeTrain() {
    if (this.train == 1) { this.trainvalue = this.textChangeTrain[0] }
    if (this.train == 2) { this.trainvalue = this.textChangeTrain[1] }
    if (this.train == 3) { this.trainvalue = this.textChangeTrain[2] }
    if (this.train == 4) { this.trainvalue = this.textChangeTrain[3] }
    if (this.train == 5) { this.trainvalue = this.textChangeTrain[4] }
  }


  //goTo function
  goTo(page){
    this.navCtrl.push(page);
  }//goTo


}
