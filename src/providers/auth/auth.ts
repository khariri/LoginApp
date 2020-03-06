import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor() {
    // console.log('Hello AuthProvider Provider');
  }

  public login(credentials){
    return new Promise((resolve, reject) => {
      if(credentials.username == "" || credentials.password == ""){
        reject("Username / Password harus di isi!");
      }else if(credentials.username == "admin" && credentials.password == "admin"){
        localStorage.setItem("isLogin", "true");
        resolve("Berhasil Login");
      } else {
        reject("Username / password salah!");
      }
    })
  }

  public logOut(){
    localStorage.setItem("isLogin", "false");
  }

}
