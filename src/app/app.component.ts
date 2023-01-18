import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {}
  isDisconnected=false;
  
  ngOnInit(): void {
    //this.isDisconnected= sessionStorage.getItem('email')===null;
  }

  

  
  seDeconnecter() {
    sessionStorage.removeItem('email');
    this.router.navigateByUrl('');
    this.isDisconnected=true;
  }
  title = 'appliRv';
}
