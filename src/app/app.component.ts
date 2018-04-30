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
  //rootPage: string = 'login-page';

  pages: Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My레시피', component: 'Mypage' , icon: 'contact' },
      { title: '내게시글', component: 'Home' , icon: 'create' },
      { title: '커뮤니티', component: 'Eqcheckup' , icon: 'chatbubbles' },
      { title: '공지사항', component: 'Contents' , icon: 'cube' },
      { title: '헬프데스크', component: 'Setting' , icon: 'help-circle' },
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
