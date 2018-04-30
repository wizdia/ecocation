import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  //login: {id?: string , password?: string} = {};
  //loginApiUrl = 'http://wizdia.dscloud.biz/whatsoap/index.php/GetUserInfo';
  loginApiUrl = 'http://localhost:3000/index.php/GetUserInfo';
  data: any = {};
  submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage,  private http: Http ) {
    this.data.id = '';
    this.data.password = '';
  }

  //goTo function
  goTo(page){
    this.navCtrl.push(page);
  }//goTo

  submit() {
    this.submitted = true;

    let headers = new Headers();
    headers.append('Accept', 'application/json, application/xml, text/plain, text/html, *.*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8' );

    let param = JSON.stringify({id: this.data.id ,
      password: this.data.password
    });


    let options = new RequestOptions({ headers: headers });

    this.http.post( this.loginApiUrl , param , options)
      .map(res => res.json())
      .subscribe( res => {
        //alert("success "+ res.result);
        this.storage.set('id',res.id);
        this.storage.set('name', res.name);
        this.storage.set('email', res.email);
        this.storage.set('sid', res.sid);
        this.storage.set('media', res.media);
        this.storage.set('gender', res.gender);
        this.storage.set('birthday', res.birthday);

      } );
    this.navCtrl.push('Home');


  }//submit


}
