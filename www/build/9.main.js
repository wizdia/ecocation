webpackJsonp([9],{

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(272);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModule", function() { return DetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsModule = (function () {
    function DetailsModule() {
    }
    return DetailsModule;
}());
DetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__details__["a" /* Details */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* Details */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__details__["a" /* Details */]
        ]
    })
], DetailsModule);

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Details; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Details = (function () {
    function Details(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.save = false;
    }
    Details.prototype.saveDoctor = function () {
        this.save = !this.save;
    };
    // Map modal
    Details.prototype.presentMapModal = function () {
        var mapModal = this.modalCtrl.create('MapModalPage', { userId: 8675309 });
        mapModal.present();
    };
    // rate modal
    Details.prototype.presentRateModal = function () {
        var rateModal = this.modalCtrl.create('RateModalPage', { userId: 8675309 });
        rateModal.present();
    };
    return Details;
}());
Details = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-details',template:/*ion-inline-start:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\details\details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-capitalize>프로필상세</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="detail-head">\n    <img src="assets/img/det-img.png" />\n    <div class="more-info">\n      <ion-fab left>\n        <button (click)="saveDoctor()" class="add-btn" ion-fab>\n          <ion-icon name="add" *ngIf="!save"></ion-icon>\n          <ion-icon name="md-checkmark" *ngIf="save"></ion-icon>\n        </button>\n      </ion-fab>\n      <img src="assets/img/img1.png" />\n      <ion-fab right>\n        <button (click)="presentMapModal()" color="secondary" ion-fab><ion-icon name="md-map"></ion-icon></button>\n      </ion-fab>\n    </div>\n  </div>\n\n  <div class="detail" text-center padding>\n    <h4>박러너</h4>\n    <p class="det-info">러닝크루지망자</p>\n    <p class="det-info">무작정 달리는게 좋은 사람입니다.</p>\n    <span class="phone">\n      <ion-icon name="md-call"></ion-icon>\n      010-111-1111\n    </span>\n\n    <div class="rate" padding text-left>\n      <h4>쪽지</h4>\n      <ion-item no-padding no-lines>\n        <ion-avatar item-start>\n          <img src="assets/img/user-img.png">\n        </ion-avatar>\n        <h2>나 <span>3 days ago</span></h2>\n        <p>오늘 저녁 치맥 콜?</p>\n      </ion-item>\n      <button (click)="presentRateModal()" ion-button block text-capitalize color="primary">쪽지쓰기</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\details\details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
], Details);

//# sourceMappingURL=details.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map