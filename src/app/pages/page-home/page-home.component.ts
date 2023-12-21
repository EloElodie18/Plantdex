import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  //lui demander de ns injecter une instance du service plante
  //implementer l'interface Oninit qui est une methode intégrée

  //jaime = true; fais partie de mon essai

  plantsToDisplay: Plant[] = []; //propriété que je nomme qui declare mon tableau, créant la communication

  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    //implementation qui permet un affichage des que le composant se lance
    this.plantsService.getPlants().subscribe((data) => {
      console.log(data);
      this.plantsToDisplay = [...data]; //(ecraser un tableau de la bonne maniere , vraie manière) ce qu'ils se passe: creer un tableau avec des données et on le colle à plantsToDisplay
    });
  }

  /*displayAfficher(){
    this.jaime = !this.jaime;
    }; methode de mon essai*/

}
