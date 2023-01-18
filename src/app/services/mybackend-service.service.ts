import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from '../rv';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MybackendServiceService {
private urlApi=environment.urlApi;

constructor(private http:HttpClient) { }

/**
 * Récupérer tous les rendez-Vous
 */
  /**
   * getAllRvs
 :Observa  */
  public getAllRvs():Observable<RendezVous[]> {    
    return this.http.get<any>("http://localhost:8080/rvs/tousrv")
  }
}
