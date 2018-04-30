webpackJsonp([3],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contents__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsPageModule", function() { return ContentsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContentsPageModule = (function () {
    function ContentsPageModule() {
    }
    return ContentsPageModule;
}());
ContentsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__contents__["a" /* Contents */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contents__["a" /* Contents */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__contents__["a" /* Contents */]
        ]
    })
], ContentsPageModule);

//# sourceMappingURL=contents.module.js.map

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

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_modal_share_modal__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_yt_yt__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Contents = (function () {
    function Contents(navCtrl, navParams, modalCtrl, youtube, ytProvider, alertCtrl) {
        //this.list = [{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'}];
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.youtube = youtube;
        this.ytProvider = ytProvider;
        this.alertCtrl = alertCtrl;
        //channelId = 'UCZZPgUIorPao48a1tBYSDgg'; // Devdactic Channel ID
        //channelId = 'UC1oazC893JHbn6VS8WHwTwg';
        //channelId = 'UCGaweJW8AnsV2ogktwOaWhQ';
        this.channelId = 'UCN2YKTP1vgg-hVGuVO_W8Zw';
        //this.youtube.openVideo('https://youtu.be/jnHiTGpgtr4');
        this.searchPlaylists();
    }
    Contents.prototype.searchPlaylists = function () {
        var _this = this;
        this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
        this.playlists.subscribe(function (data) {
            console.log('playlists: ', data);
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: 'No Playlists found for that Channel ID',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    Contents.prototype.openPlaylist = function (id) {
        this.navCtrl.push('PlaylistPage', { id: id });
    };
    // remove product qty
    Contents.prototype.removeItem = function (item) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                this.list.splice(i, 1);
            }
        }
    };
    // like function
    Contents.prototype.like = function (item) {
        item.activeLike = !item.activeLike;
    };
    // social media modal
    Contents.prototype.presentshareModal = function () {
        var shareModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__share_modal_share_modal__["a" /* ShareModal */], { userId: 8675309 });
        shareModal.present();
    };
    //goTo function
    Contents.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    return Contents;
}());
Contents = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-contents',template:/*ion-inline-start:"D:\dev\ionicProjects\whatsoap\whatsoap\src\pages\contents\contents.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle start>\n      <ion-icon name="md-menu"></ion-icon>\n    </button>\n    <ion-title text-capitalize><ion-icon name="cube" icon-left> 올바른 솔루션</ion-icon></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item>\n    <!--<ion-label stacked>Channel ID</ion-label>\n    <ion-input type="text" [(ngModel)]="channelId"></ion-input>-->\n    <ion-label color="primary">올바른자세 교정동작</ion-label>\n  </ion-item>\n  <!--<button full ion-button (click)="searchPlaylists()" [disabled]="channelId === \'\'" color="danger">Search Playlists</button>-->\n\n  <ion-list no-padding>\n    <button ion-item *ngFor="let list of playlists | async" (click)="openPlaylist(list.id)">\n      <ion-thumbnail item-start>\n        <img [src]="list.snippet.thumbnails.standard.url">\n      </ion-thumbnail>\n      <h2>{{ list.snippet.title }}</h2>\n      <p>{{ list.snippet.publishedAt | date:\'short\' }}</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\dev\ionicProjects\whatsoap\whatsoap\src\pages\contents\contents.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */], __WEBPACK_IMPORTED_MODULE_4__providers_yt_yt__["a" /* YtProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* AlertController */]])
], Contents);

//# sourceMappingURL=contents.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map