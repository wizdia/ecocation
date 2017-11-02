webpackJsonp([6],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_modal__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalPageModule", function() { return MapModalPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapModalPageModule = (function () {
    function MapModalPageModule() {
    }
    return MapModalPageModule;
}());
MapModalPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__map_modal__["a" /* MapModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map_modal__["a" /* MapModalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__map_modal__["a" /* MapModalPage */]
        ]
    })
], MapModalPageModule);

//# sourceMappingURL=map-modal.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModalPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapModalPage = (function () {
    function MapModalPage(navCtrl, navParams, viewCtrl, geolocation, ngZOne) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.geolocation = geolocation;
        this.ngZOne = ngZOne;
        this.markers = [{ id: 1, lat: 37.593003, lng: 127.070910 }];
        this.ionViewLoaded();
    }
    MapModalPage.prototype.ionViewLoaded = function () {
        this.loadMap();
    };
    MapModalPage.prototype.loadMap = function () {
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
    MapModalPage.prototype.addMarker = function () {
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
    MapModalPage.prototype.addMarkersToMap = function () {
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
    MapModalPage.prototype.addInfoWindowToMarker = function (marker) {
        marker.addListener('click', function () {
        });
    };
    MapModalPage.prototype.close = function () {
        this.viewCtrl.dismiss(); // This works fine
    };
    return MapModalPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
], MapModalPage.prototype, "mapElement", void 0);
MapModalPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-map-modal',template:/*ion-inline-start:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\map-modal\map-modal.html"*/'<ion-content class="map-content">\n  <div #map id="map" data-tap-disabled="true"></div>\n  <ion-icon md="md-close" text-center color="primary" class="close-icon" (click)="close()" large></ion-icon>\n</ion-content>\n<ion-footer class="map-footer" color="primary">\n    <ion-grid color="primary">\n      <ion-row>\n        <ion-col padding-left padding-bottom width-75>\n          <h4>박러너</h4>\n          <p no-margin>누적거리 9.8 Km</p>\n        </ion-col>\n        <ion-col width-25 text-center>\n          <ion-icon md="ios-pulse" large></ion-icon>\n          <p no-margin>100m 13 초</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\dev\ionicProjects\runningDNA\runningdna\src\pages\map-modal\map-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgZone */]])
], MapModalPage);

//# sourceMappingURL=map-modal.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map