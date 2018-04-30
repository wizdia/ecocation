webpackJsonp([9],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(463);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Home = (function () {
    function Home(platform, navCtrl, navParams, viewCtrl, modalCtrl) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.items = {};
        this.showbtn = true;
        this.platform.ready().then(function () {
            _this.toggleshowbtn();
        });
    }
    Home.prototype.toggleshowbtn = function () {
    };
    //goTo function
    Home.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    }; //goTo
    return Home;
}());
Home = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\dev\ionicProjects\whatsoap\whatsoap\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="white" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" style="color: #403f3f" ></ion-icon>\n    </button>\n    <ion-title text-capitalize> 시크릿레시피 </ion-title>\n  </ion-navbar>\n</ion-header>\n<!--<ion-list [virtualScroll]>\n  <ion-item >\n    &lt;!&ndash;<ion-avatar>\n      <ion-img ></ion-img>\n    </ion-avatar>&ndash;&gt;\n  </ion-item>\n</ion-list>-->\n<ion-content class="grid-full"  style="background-size: 100%;">\n  <ion-row no-margin no-padding style="height: 70%;">\n    <ion-col class="cell-1" (click)="goTo(\'CosmeRecipes\')" >\n      <!--<ion-card (click)="goTo(\'CosmeRecipes\')">-->\n        <img class="full-image" src="../../assets/img/makecosme.png"/>\n        <div class="card-title">화장품 연구실</div>\n        <div class="card-subtitle">레시피 만들러 가기</div>\n      <!--</ion-card>-->\n    </ion-col>\n    <ion-col class="cell-2" (click)="goTo(\'CosmeRecipes\')">\n      <!--<ion-card>-->\n        <img class="full-image" src="../../assets/img/makesoap.png"/>\n        <div class="card-title">수제비누 공방</div>\n        <div class="card-subtitle">비누 만들러 가기</div>\n      <!--</ion-card>-->\n    </ion-col>\n    <ion-col class="cell-3" (click)="goTo(\'CosmeRecipes\')">\n      <!--<ion-card>-->\n        <img class="full-image" src="../../assets/img/makesoap.png"/>\n        <div class="card-title">화장품이야기</div>\n        <div class="card-subtitle">커뮤니티 가기</div>\n      <!--</ion-card>-->\n    </ion-col>\n    <ion-col class="cell-4" (click)="goTo(\'CosmeRecipes\')" >\n      <!--<ion-card>-->\n        <img class="full-image" src="../../assets/img/makesoap.png"/>\n        <div class="card-title">나만의 레시피</div>\n        <div class="card-subtitle">My레시피 가기</div>\n      <!--</ion-card>-->\n    </ion-col>\n  </ion-row>\n  <ion-row nowrap style="background-color: #EFEFEF; width:100%; height:30%;">\n      <div text-center no-margin no-padding style="background-color: #EFEFEF; width:100%; ">\n        <h6>어플이용이 어렵나요?</h6>\n        <a>매뉴얼/QnA보러가기</a>\n        <div margin-top>\n          <ion-img width="100" height="50" src="../assets/icon/top_logo5.jpg" style="align-items: center"></ion-img>\n        </div>\n      </div>\n  </ion-row>\n</ion-content>\n\n\n<!--\n<ion-content class="grid-full" no-padding no-margin>\n\n  <ion-grid no-padding no-margin>\n    <ion-row >\n      <ion-col col-6 no-padding  no-margin>\n        <ion-card (click)="goTo(\'CosmeRecipes\')">\n        <img src="../../assets/img/makecosme.png"/>\n        <div class="card-title">화장품 연구실</div>\n        <div class="card-subtitle">레시피 만들러 가기</div>\n      </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 no-padding>\n        <ion-card>\n          <img src="../../assets/img/makesoap.png"/>\n          <div class="card-title">수제비누 공방</div>\n          <div class="card-subtitle">비누 만들러 가기</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col >\n        <ion-card>\n          <img src="../../assets/img/makesoap.png"/>\n          <div class="card-title">화장품이야기</div>\n          <div class="card-subtitle">커뮤니티 가기</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col >\n        <ion-card>\n          <img src="../../assets/img/makesoap.png"/>\n          <div class="card-title">나만의 레시피</div>\n          <div class="card-subtitle">My레시피 가기</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n-->\n\n\n'/*ion-inline-end:"D:\dev\ionicProjects\whatsoap\whatsoap\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], Home);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map