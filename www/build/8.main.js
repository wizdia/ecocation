webpackJsonp([8],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(274);
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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(194);
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
    function Home(platform, navCtrl, navParams, viewCtrl, geolocation, ngZOne, modalCtrl) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.geolocation = geolocation;
        this.ngZOne = ngZOne;
        this.modalCtrl = modalCtrl;
        this.showbtn = true;
        this.markers = [{ id: 1, lat: 37.593003, lng: 127.070910 }, { id: 2, lat: 37.583003, lng: 127.000910 }, { id: 3, lat: 37.563303, lng: 127.070910 }, { id: 3, lat: 37.533303, lng: 127.000910 }];
        this.grid = [{ id: 1, img: 'assets/img/img1.png' }, { id: 2, img: 'assets/img/img2.png' }, { img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' }, { img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' },
            { img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' }, { img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' }];
        this.list = [{ img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' }, { img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' }, { img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' }, { img: 'assets/img/img1.png' }, { img: 'assets/img/img2.png' }];
        this.platform.ready().then(function () {
            _this.toggleshowbtn();
        });
    }
    Home.prototype.toggleshowbtn = function () {
        if (this.showbtn)
            this.loadMap();
    };
    Home.prototype.loadMap = function () {
        var _this = this;
        this.markerBounds = new google.maps.LatLngBounds();
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.addMarker(); // current
            _this.addMarkersToMap();
        }, function (err) {
            console.log(err);
        });
    };
    Home.prototype.addMarker = function () {
        var icon = {
            url: "assets/img/pin.png",
            scaledSize: new google.maps.Size(25, 25),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var markerdata = {
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter(),
            icon: icon
        };
        var marker = new google.maps.Marker(markerdata);
        marker.setMap(this.map);
        this.markerBounds.extend(this.map.getCenter());
    };
    Home.prototype.addMarkersToMap = function () {
        for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
            var item = _a[_i];
            var icon = {
                url: "assets/img/marker.png",
                scaledSize: new google.maps.Size(20, 20),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 0) // anchor
            };
            var position = new google.maps.LatLng(item.lat, item.lng);
            var markerdata = { position: position, icon: icon, title: item.id.toString() };
            var marker = new google.maps.Marker(markerdata);
            marker.setMap(this.map);
            this.markerBounds.extend(position);
            this.addInfoWindowToMarker(marker);
        }
        this.map.fitBounds(this.markerBounds);
        this.map.setCenter(this.markerBounds.getCenter());
    };
    Home.prototype.addInfoWindowToMarker = function (marker) {
        var _this = this;
        marker.addListener('click', function () {
            _this.ngZOne.run(function () {
                if (!_this.showslider)
                    _this.showslider = true;
                _this.currentdoctor = marker.title;
            });
        });
    };
    // like function
    Home.prototype.like = function (item) {
        item.activeLike = !item.activeLike;
    };
    Home.prototype.like2 = function (item) {
        item.activeLike2 = !item.activeLike2;
    };
    // Saved function
    Home.prototype.SaveDoctor = function (item) {
        item.save = !item.save;
    };
    Home.prototype.SaveDoctor2 = function (item) {
        item.save2 = !item.save2;
    };
    // social media modal
    Home.prototype.presentshareModal = function () {
        var shareModal = this.modalCtrl.create('ShareModal', { userId: 8675309 });
        shareModal.present();
    };
    //goTo function
    Home.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    return Home;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
], Home.prototype, "mapElement", void 0);
Home = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-capitalize>러닝 맵</ion-title>\n    <ion-buttons class="toggle-btn" end>\n      <button ion-item icon-only no-padding no-lines>\n        <ion-toggle  (ionChange)="toggleshowbtn()" [(ngModel)]="showbtn" checked="true"></ion-toggle>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!--section of map and scroll list-->\n  <div *ngIf="showbtn " #map id="map"></div>\n  <div *ngIf="showbtn&&showslider" [ngClass]="{\'activescroll\': showbtn }" class="home-detail">\n    <ion-scroll scrollX="true">\n      <ion-card class="app-card" *ngFor="let item of grid" padding  [ngClass]="{\'activeslide\': currentdoctor==item.id }">\n        <img (click)="goTo(\'Details\')" src="{{item.img}}" />\n        <div class="card-det">\n          <h4 (click)="goTo(\'Details\')" no-margin>kim chol hee</h4>\n          <p (click)="goTo(\'Details\')" no-margin>Under dogs</p>\n          <ion-item (click)="goTo(\'Details\')" no-padding no-lines>\n            <ion-icon name="md-pin" mini item-start></ion-icon>\n            서울특별시 중랑구 면목동 중랑천둔치\n          </ion-item>\n          <ion-grid no-padding>\n            <ion-row>\n              <ion-col col-6>\n                <button (click)="SaveDoctor(item)" *ngIf="!item.save" ion-button block>저장하기</button>\n                <button (click)="SaveDoctor(item)" *ngIf="item.save" ion-button block>저장됨</button>\n              </ion-col>\n              <ion-col col-3 (click)="like(item)">\n                <ion-icon name="md-star" color="light" [ngClass]="{\'activeLikeColor\': item.activeLike }"></ion-icon>\n              </ion-col>\n              <ion-col col-3 (click)="presentshareModal()">\n                <ion-icon name="md-share" color="light"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-card>\n    </ion-scroll>\n  </div>\n\n\n  <!--section of list-->\n  <ion-list *ngIf="!showbtn" [ngClass]="{\'showList\':!showbtn}" class="main-list">\n    <ion-item class="list-item" *ngFor="let item of list" no-lines>\n      <ion-avatar (click)="goTo(\'Details\')" item-start>\n        <img src="{{item.img}}">\n      </ion-avatar>\n      <div class="card-det">\n        <h4 (click)="goTo(\'Details\')" no-margin>난몰라</h4>\n        <p (click)="goTo(\'Details\')" no-margin>모라는기여</p>\n        <ion-item no-padding no-lines>\n          <ion-icon name="md-pin" mini text-left item-start></ion-icon>\n          위치 안 밝힘\n        </ion-item>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-6>\n              <button (click)="SaveDoctor2(item)" *ngIf="!item.save2" ion-button block>저장하기</button>\n              <button (click)="SaveDoctor2(item)" *ngIf="item.save2" [ngClass]="{\'saveColor\':item.save2}" ion-button block>저장됨</button>\n            </ion-col>\n            <ion-col (click)="like2(item)" col-3>\n              <ion-icon name="md-star" color="grayColor" [ngClass]="{\'activeLikeColor\': item.activeLike2 }"></ion-icon>\n            </ion-col>\n            <ion-col col-3>\n              <ion-icon (click)="presentshareModal()" name="md-share" color="grayColor"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
], Home);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map