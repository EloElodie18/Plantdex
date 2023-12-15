import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {

   constructor(private http: HttpClient) {} //juste un test pr voir si ça fontionne

  getPlants (): Observable<Plant[]> { //permiere methode pr fr une requete sur l'url //le observable c'est juste une indication pour ns
    return this.http.get<Plant[]>('http://localhost:3000/plants') //typer grace à <Plant[]> dc expliquer qu'il devra me renvoyer un tableau de plante
  } //requete http de type get qui ns renvoie vers un tableau de plante vers cet url là
}
