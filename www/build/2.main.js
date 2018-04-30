webpackJsonp([2],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite__ = __webpack_require__(462);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePageModule", function() { return FavoritePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavoritePageModule = (function () {
    function FavoritePageModule() {
    }
    return FavoritePageModule;
}());
FavoritePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__favorite__["a" /* Favorite */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorite__["a" /* Favorite */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__favorite__["a" /* Favorite */]
        ]
    })
], FavoritePageModule);

//# sourceMappingURL=favorite.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
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
        selector: 'page-share-modal',template:/*ion-inline-start:"D:\dev\ionicProjects\whatsoap\whatsoap\src\pages\share-modal\share-modal.html"*/'\n<ion-header>\n  <ion-toolbar class="share-toolbar" hideBackButton="true">\n    <ion-title text-capitalize>공유하기</ion-title>\n    <ion-buttons (click)="close()" end>\n      <button class="close-modal" ion-button icon-only text-right color="secondary">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="share-content">\n\n  <ion-list no-margin>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left>\n        <img src="assets/img/dropbox.png">\n      </ion-avatar>\n      <h2>Dropbox</h2>\n    </ion-item>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left (click)="shareViaFacebook()">\n        <img src="assets/img/facebook.png">\n      </ion-avatar>\n      <h2>Facebook</h2>\n    </ion-item>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left (click)="shareViaEmail()">\n        <img src="assets/img/gmail.png">\n      </ion-avatar>\n      <h2>Gmail</h2>\n    </ion-item>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left (click)="shareViaInstagram()">\n        <img src="assets/img/instagram.png">\n      </ion-avatar>\n      <h2>Instagram</h2>\n    </ion-item>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left (click)="shareViaTwitter()">\n        <img src="assets/img/twitter.png">\n      </ion-avatar>\n      <h2>Twitter</h2>\n    </ion-item>\n\n    <ion-item (click)="close()">\n      <ion-avatar item-left>\n        <img src="assets/img/hangout.png">\n      </ion-avatar>\n      <h2>Hangout</h2>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\dev\ionicProjects\whatsoap\whatsoap\src\pages\share-modal\share-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], ShareModal);

//# sourceMappingURL=share-modal.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_modal_share_modal__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Favorite; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Favorite = (function () {
    function Favorite(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.list = [{ img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' }, { img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' }, { img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' }, { img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' }];
    }
    // remove product qty
    Favorite.prototype.removeItem = function (item) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                this.list.splice(i, 1);
            }
        }
    };
    // like function
    Favorite.prototype.like = function (item) {
        item.activeLike = !item.activeLike;
    };
    // social media modal
    Favorite.prototype.presentshareModal = function () {
        var shareModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__share_modal_share_modal__["a" /* ShareModal */], { userId: 8675309 });
        shareModal.present();
    };
    //goTo function
    Favorite.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    return Favorite;
}());
Favorite = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-favorite',template:/*ion-inline-start:"D:\dev\ionicProjects\whatsoap\whatsoap\src\pages\favorite\favorite.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle start>\n      <ion-icon name="md-menu"></ion-icon>\n    </button>\n    <ion-title text-capitalize>저장됨</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="main-list">\n    <ion-item class="list-item" *ngFor="let item of list" no-lines>\n      <ion-avatar (click)="goTo(\'Details\')" item-start>\n        <img src="assets/img/img1.png">\n      </ion-avatar>\n      <div class="card-det">\n        <h4 (click)="goTo(\'Details\')" no-margin>달려라하니</h4>\n        <p (click)="goTo(\'Details\')" no-margin>엄마~</p>\n        <ion-item no-padding no-lines>\n          <ion-icon name="md-pin" mini text-left item-start></ion-icon>\n          우리집\n        </ion-item>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-6>\n              <button (click)="removeItem(item)" ion-button block>삭제</button>\n            </ion-col>\n            <ion-col (click)="like(item)" col-3>\n              <ion-icon name="md-star" color="grayColor" [ngClass]="{\'activeLikeColor\': item.activeLike }"></ion-icon>\n            </ion-col>\n            <ion-col col-3>\n              <ion-icon name="md-share" color="grayColor" (click)="presentshareModal()"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\dev\ionicProjects\whatsoap\whatsoap\src\pages\favorite\favorite.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], Favorite);

//# sourceMappingURL=favorite.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map