webpackJsonp([8],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(464);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Login = (function () {
    function Login(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        //login: {id?: string , password?: string} = {};
        //loginApiUrl = 'http://wizdia.dscloud.biz/whatsoap/index.php/GetUserInfo';
        this.loginApiUrl = 'http://localhost:3000/index.php/GetUserInfo';
        this.data = {};
        this.submitted = false;
        this.data.id = '';
        this.data.password = '';
    }
    //goTo function
    Login.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    }; //goTo
    Login.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Accept', 'application/json, application/xml, text/plain, text/html, *.*');
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        var param = JSON.stringify({ id: this.data.id,
            password: this.data.password
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.loginApiUrl, param, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            //alert("success "+ res.result);
            _this.storage.set('id', res.id);
            _this.storage.set('name', res.name);
            _this.storage.set('email', res.email);
            _this.storage.set('sid', res.sid);
            _this.storage.set('media', res.media);
            _this.storage.set('gender', res.gender);
            _this.storage.set('birthday', res.birthday);
        });
        this.navCtrl.push('Home');
    }; //submit
    return Login;
}());
Login = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\dev\ionicProjects\whatsoap\whatsoap\src\pages\login\login.html"*/'\n<ion-content class="form-content" padding>\n  <div class="Loginpage">\n      <div class="formContainer">\n        <ion-img class="cent-img" width="250" height="130" src="../assets/img/secret_recipe_burned.png" ></ion-img>\n        <form  class="app-form" text-center>\n          <ion-list>\n            <ion-item no-padding no-lines>\n              <ion-label floating>아이디</ion-label>\n              <ion-input type="id" [(ngModel)]="data.id" name="id"></ion-input>\n            </ion-item>\n            <ion-item no-padding no-lines>\n              <ion-label floating>비밀번호</ion-label>\n              <ion-input type="password" [(ngModel)]="data.password" name="password"></ion-input>\n            </ion-item>\n          </ion-list>\n          <button ion-button round strong class="bigButton-100" text-uppercase color="grayColor" (click)="submit()">로그인</button>\n          <p class="bold" color="light" >아직 가입 안하셨다고요? <a text-decoration="underline" (click)="goTo(\'Register\')">가입하기</a></p>\n          <a>아이디 비밀번호 찾기</a>\n        </form>\n        <div class="loginFooter" text-center>\n          <div class="option-sign" text-center margin-bottom>\n            <p>간편 로그인</p>\n            <ion-img style="width: 50px; height: 50px;" src="../../assets/icon/facebook.png"></ion-img>\n            <ion-img style="width: 50px; height: 50px;" src="../../assets/icon/kakaotalk.png"></ion-img>\n            <ion-img style="width: 50px; height: 50px;" src="../../assets/icon/naver.png"></ion-img>\n          </div>\n          <div>\n            <a>비회원으로 로그인하기</a>\n          </div>\n          <div margin-top>\n            <ion-img width="100" height="50" src="../assets/icon/top_logo5.jpg" style="align-items: center"></ion-img>\n          </div>\n        </div>\n\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\dev\ionicProjects\whatsoap\whatsoap\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map