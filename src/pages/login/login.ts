import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials: any = {
    username: "",
    password: "",
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    //cek apakah sudah dalam kondisi login
    // console.log('ionViewDidLoad LoginPage');
    let status = localStorage.getItem("isLogin");
    if(status == "true"){
      this.navCtrl.setRoot(HomePage);
    }
  }

  login(){
    this.auth.login(this.credentials).then((resp) => {
      let toast = this.toastCtrl.create({
        message: "Berhasil",
        duration: 3000,
        position: 'buttom'
      });
      toast.present();
      this.navCtrl.setRoot(HomePage);
    }).catch((err) => {
      let toast = this.toastCtrl.create({
        message: err,
        duration: 2000,
        position: 'button'
      });
      toast.present();
    })
  }

}
