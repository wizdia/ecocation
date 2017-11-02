import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'Login';

  pages: Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '러닝 맵', component: 'Home' , icon: 'ios-map' },
      { title: '저장된 친구', component: 'Favorite' , icon: 'md-heart' },
      { title: '내 계정', component: 'Profile' , icon: 'md-person' },
      { title: '설정', component: 'Setting' , icon: 'md-settings' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(page) {
    this.nav.setRoot(page);
  }

  // animate my app Function
  public animateVarible:boolean=true;
}
