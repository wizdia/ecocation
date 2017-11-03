import { Component, ViewChild, ElementRef ,NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';



declare var google;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  grid: Array<any>;
  list: Array<any>;
  showbtn: boolean=true;
  markerBounds
  currentdoctor
  showslider
  markers=[{id:1,lat:37.593003,lng:127.070910},{id:2,lat:37.583003,lng:127.000910},{id:3,lat:37.563303,lng:127.070910},{id:3,lat:37.533303,lng:127.000910}]
  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public geolocation: Geolocation,public ngZOne:NgZone, public modalCtrl: ModalController) {
    this. grid = [{id:1,img:'assets/img/img1.png'},{id:2,img:'assets/img/img2.png'},{img:'assets/img/img1.png'},{img:'assets/img/img2.png'},{img:'assets/img/img1.png'},{img:'assets/img/img2.png'},
    {img:'assets/img/img1.png'},{img:'assets/img/img2.png'},{img:'assets/img/img1.png'},{img:'assets/img/img2.png'}];

    this.list = [{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'}];
    this.platform.ready().then(() => {
      this.toggleshowbtn()
    })
  }


   toggleshowbtn(){
     if(this.showbtn) this.loadMap();
   }
    loadMap(){
      this.markerBounds = new google.maps.LatLngBounds();
      this.geolocation.getCurrentPosition().then((position) => {

        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        let mapOptions = {
          center: latLng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker()// current
        this.addMarkersToMap()
      }, (err) => {
        console.log(err);
      });

    }

    addMarker(){
      var icon = {
        url: "assets/img/pin.png", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      var markerdata ={
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.map.getCenter()
          ,icon:icon
      }
      let marker = new google.maps.Marker(markerdata);
      marker.setMap(this.map);
      this.markerBounds.extend( this.map.getCenter());
    }

    addMarkersToMap() {
        for(let item of this.markers) {
            var icon = {
                url: "assets/img/marker2.png", // url
                scaledSize: new google.maps.Size(20, 20), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0,0) // anchor
            };

            var position = new google.maps.LatLng(item.lat, item.lng);
            var markerdata={position: position,icon:icon, title: item.id.toString()}
            var marker = new google.maps.Marker(markerdata);
            marker.setMap(this.map);
            this.markerBounds.extend(position);
            this.addInfoWindowToMarker(marker)
        }
        this.map.fitBounds(this.markerBounds);
        this.map.setCenter(this.markerBounds.getCenter());
    }

   addInfoWindowToMarker(marker){
      marker.addListener('click', () => {

         this.ngZOne.run(()=>{
         if(!this.showslider)this.showslider=true
         this.currentdoctor=marker.title
        });
      })
    }

// like function
  like(item){
    item.activeLike=!item.activeLike;
  }

  like2(item){
    item.activeLike2=!item.activeLike2;
  }

// Saved function
  SaveDoctor(item){
    item.save = !item.save;
  }

  SaveDoctor2(item){
    item.save2 = !item.save2;
  }

// social media modal
  presentshareModal() {
   let shareModal = this.modalCtrl.create('ShareModal', { userId: 8675309 });
   shareModal.present();
 }

//goTo function
  goTo(page){
    this.navCtrl.push(page);
  }

}
