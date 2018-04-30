
import {Observable} from "rxjs/Observable";
//import {RequestOptions} from "@angular/http";
//import { HTTP } from '@ionic-native/http';
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AppUsers {
  //loginApiUrl = 'http://localhost/SchoolApp/include/userLogin.php';
  loginApiUrl = 'http://wizdia.dscloud.biz/whatsoap/index.php/GetUserInfo';
  data: any = {};

  constructor(private http: Http) {
    this.data.id = '';
    this.data.password = '';
  }

  /*submit(){
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    let postParams = {
      id: this.data.id,
      password: this.data.password
    }

    return this.http.post(this.loginApiUrl, postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });

  }*/
}
