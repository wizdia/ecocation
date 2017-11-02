webpackJsonp([4],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(279);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* Register */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* Register */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* Register */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Register = (function () {
    function Register(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    //goTo function
    Register.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    return Register;
}());
Register = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\register\register.html"*/'<ion-header class="form-header">\n  <ion-navbar color="primary"></ion-navbar>\n</ion-header>\n\n<ion-content class="form-content" padding>\n  <div class="Loginpage">\n      <div class="formContainer">\n        <form  class="app-form" text-center>\n          <ion-list>\n            <div class="user-name">\n                 <ion-item no-padding no-lines>\n                  <ion-label floating>성</ion-label>\n                  <ion-input type="text"></ion-input>\n                 </ion-item>\n\n                 <ion-item no-padding no-lines>\n                   <ion-label floating>이름</ion-label>\n                   <ion-input type="text"></ion-input>\n                 </ion-item>\n             </div>\n            <ion-item no-padding no-lines>\n              <ion-label floating>이메일(Email)</ion-label>\n              <ion-input type="email"></ion-input>\n            </ion-item>\n            <ion-item no-padding no-lines>\n              <ion-label floating>비밀번호(Password)</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n          </ion-list>\n          <button ion-button block strong text-uppercase color="grayColor" (click)="goTo(\'Home\')">계정 만들기</button>\n        </form>\n        <div class="loginFooter">\n          <div class="option-sign" text-center>\n            <p>소셜 로그인</p>\n            <ion-grid no-padding>\n              <ion-row padding-bottom>\n                <ion-col width-33>\n                  <i class="app-facebook-1"></i>\n                </ion-col>\n                <ion-col width-33>\n                  <i class="app-twitter"></i>\n                </ion-col>\n                <ion-col width-33>\n                  <i class="app-gplus"></i>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n      </div>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Register);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map