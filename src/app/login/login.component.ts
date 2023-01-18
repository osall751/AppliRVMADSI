import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogin = 'osall@uvs.edu.sn';
  userPwd = '123456789';
  loginOk = true;
name: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  seLoguer() {
    if (this.userLogin.indexOf('@') != -1) {
      this.loginOk = true;
      sessionStorage.setItem("email",this.userLogin)
      this.router.navigate(['accueil']);
    } else {
      //alert('Le login saisie est incorrecte !!!');
      this.loginOk = false;
    }
  }
}
