import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  userName: string | null="";
  constructor(private routeActive:ActivatedRoute) { }

  ngOnInit(): void {
    this.userName=this.routeActive.snapshot.paramMap.get("email");
  }

}
