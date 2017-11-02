webpackJsonp([3],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(280);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingModule = (function () {
    function SettingModule() {
    }
    return SettingModule;
}());
SettingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* Setting */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* Setting */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* Setting */]
        ]
    })
], SettingModule);

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(195);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Setting; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Setting = (function () {
    function Setting(_myApp, navCtrl, navParams, popoverCtrl) {
        this._myApp = _myApp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.action = false;
        this.action = this._myApp.animateVarible;
    }
    Setting.prototype.animateApp = function (e) {
        this._myApp.animateVarible = e.checked;
        this.action = this._myApp.animateVarible;
    };
    //goTo function
    Setting.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    return Setting;
}());
Setting = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\setting\setting.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle start>\n      <ion-icon name="md-menu"></ion-icon>\n    </button>\n    <ion-title text-capitalize>설정</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item-group class="setting-list" margin-bottom>\n    <ion-item-divider no-padding color="light">계정</ion-item-divider>\n    <ion-item (click)="goTo(\'Profile\')" no-padding>프로필 편집</ion-item>\n    <ion-item (click)="goTo(\'Login\')" no-padding>로그아웃</ion-item>\n  </ion-item-group>\n\n  <ion-item-group class="setting-list" margin-bottom>\n    <ion-item-divider no-padding color="light">설정</ion-item-divider>\n    <ion-item no-padding>\n      <ion-label>위치 서비스</ion-label>\n      <ion-toggle></ion-toggle>\n    </ion-item>\n    <ion-item class="select-setting" no-padding>\n      <ion-label> 쪽지 받기</ion-label>\n      <ion-toggle></ion-toggle>\n    </ion-item>\n    <ion-item no-padding>\n      <ion-label>진동</ion-label>\n      <ion-toggle></ion-toggle>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group class="setting-list" margin-bottom>\n    <ion-item-divider no-padding color="light">음악</ion-item-divider>\n    <ion-item no-padding>\n      <ion-label>\n        랜덤재생\n      </ion-label>\n      <ion-checkbox (ionChange)="animateApp($event)"  checked="{{action}}" item-right></ion-checkbox>\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\setting\setting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */]])
], Setting);

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map