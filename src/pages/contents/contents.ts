import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ShareModal } from '../share-modal/share-modal';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YtProvider } from './../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-contents',
  templateUrl: 'contents.html',
})
export class Contents {
  //channelId = 'UCZZPgUIorPao48a1tBYSDgg'; // Devdactic Channel ID
  //channelId = 'UC1oazC893JHbn6VS8WHwTwg';
  //channelId = 'UCGaweJW8AnsV2ogktwOaWhQ';
  channelId = 'UCN2YKTP1vgg-hVGuVO_W8Zw';
  playlists: Observable<any[]>;

  list: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private youtube: YoutubeVideoPlayer, private ytProvider: YtProvider, private alertCtrl: AlertController) {
    //this.list = [{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'}];

    //this.youtube.openVideo('https://youtu.be/jnHiTGpgtr4');
    this.searchPlaylists();

  }

  searchPlaylists() {
    this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('playlists: ', data);
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'No Playlists found for that Channel ID',
        buttons: ['OK']
      });
      alert.present();
    })
  }

  openPlaylist(id) {
    this.navCtrl.push('PlaylistPage', {id: id});
  }

// remove product qty
  removeItem(item){
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i] == item){
        this.list.splice(i, 1);
      }

    }
  }

// like function
  like(item){
    item.activeLike=!item.activeLike;
  }

// social media modal
  presentshareModal() {
    let shareModal = this.modalCtrl.create(ShareModal, { userId: 8675309 });
    shareModal.present();
  }

//goTo function
  goTo(page){
    this.navCtrl.push(page);
  }

}
