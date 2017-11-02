webpackJsonp([2],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_modal__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModalPageModule", function() { return ShareModalPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShareModalPageModule = (function () {
    function ShareModalPageModule() {
    }
    return ShareModalPageModule;
}());
ShareModalPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__share_modal__["a" /* ShareModal */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__share_modal__["a" /* ShareModal */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__share_modal__["a" /* ShareModal */]
        ]
    })
], ShareModalPageModule);

//# sourceMappingURL=share-modal.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShareModal = (function () {
    function ShareModal(navCtrl, navParams, platform, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    ShareModal.prototype.close = function () {
        this.viewCtrl.dismiss(); // This works fine
    };
    return ShareModal;
}());
ShareModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-share-modal',template:/*ion-inline-start:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\share-modal\share-modal.html"*/'\n<ion-header>\n  <ion-toolbar class="share-toolbar" hideBackButton="true">\n    <ion-title text-capitalize>공유하기</ion-title>\n    <ion-buttons (click)="close()" end>\n      <button class="close-modal" ion-button icon-only text-right color="secondary">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="share-content">\n\n  <ion-list no-margin>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left>\n        <img src="assets/img/dropbox.png">\n      </ion-avatar>\n      <h2>Dropbox</h2>\n    </ion-item>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left (click)="shareViaFacebook()">\n        <img src="assets/img/facebook.png">\n      </ion-avatar>\n      <h2>Facebook</h2>\n    </ion-item>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left (click)="shareViaEmail()">\n        <img src="assets/img/gmail.png">\n      </ion-avatar>\n      <h2>Gmail</h2>\n    </ion-item>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left (click)="shareViaInstagram()">\n        <img src="assets/img/instagram.png">\n      </ion-avatar>\n      <h2>Instagram</h2>\n    </ion-item>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left (click)="shareViaTwitter()">\n        <img src="assets/img/twitter.png">\n      </ion-avatar>\n      <h2>Twitter</h2>\n    </ion-item>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left>\n        <img src="assets/img/hangout.png">\n      </ion-avatar>\n      <h2>Hangout</h2>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\share-modal\share-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
], ShareModal);

//# sourceMappingURL=share-modal.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map