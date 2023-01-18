import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from '../rv';
import { faker } from '@faker-js/faker';
import { MadsiRendezVousService } from '../services/madsi-rendez-vous.service';
import { MybackendServiceService } from '../services/mybackend-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  userName: string | null = '';
  nbr = 0;
  tabRvs = [
    new RendezVous(
      faker.datatype.uuid(),
      'Rv chez le dentiste',
      'Dakar',
      new Date('2023/11/11'),
      faker.image.city()
    ),
  ];

  constructor(
    private router: Router,
    private rvService: MadsiRendezVousService,
    private mybackendServiceService: MybackendServiceService
  ) {}

  supprimer(id: string) {
    this.tabRvs = this.rvService.supprimer(id);
  }

  /**
   * getAllRvs
   */
  public getAllRvs() {
    this.mybackendServiceService.getAllRvs().subscribe(
      (response: RendezVous[])=>{
        this.tabRvs=response;
        console.log(response.values);
      }
    );
  }

    ngOnInit(): void {
    if (sessionStorage.getItem('email') !== null) {
      this.userName = sessionStorage.getItem('email');
      //this.tabRvs = this.rvService.initialiserTabRV();
      this.getAllRvs();
    } else {
      this.router.navigateByUrl('');
    }
  }
}
