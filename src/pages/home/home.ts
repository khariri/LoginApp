import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ AuthProvider ]
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthProvider) {

  }

  logout(){
    this.auth.logOut()
    this.navCtrl.setRoot("LoginPage");
  }

}
