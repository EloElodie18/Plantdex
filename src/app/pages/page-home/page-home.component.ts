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
  plantsToDisplay: Plant[] = []; //propriété que je nomme qui declare mon tableau, créant la communication, initialisé à vide
  allPlants: Plant[] = [];
  categoriesToSend: string[] = [];
  sauvegardeTexteSaisie : string = '';
  sauvegardeFiltre: string[] = [];

  constructor(private plantsService: PlantsService) {} //injection service avant de pvr utiliser, et peut être utilisé par tous car c'est un service, dc implementé par tous

  ngOnInit(): void { 
    //implementation qui permet un affichage des que le composant se lance, dc tout ce que j'y lance, chargé au lancement de mon composant
    this.plantsService.getPlants().subscribe((data) => {
      console.log(data);
      this.plantsToDisplay = [...data]; //(ecraser un tableau de la bonne maniere , vraie manière) ce qu'il se passe: creer un tableau avec des données et on le colle à plantsToDisplay
      //ICI APPELER 
      this.categoriesToSend = this.getCategoriesFromPlants(this.plantsToDisplay); //stocker retour appel fonction, le tableau de plante
      this.sauvegardeFiltre = [...this.categoriesToSend];
      this.allPlants = [...data];
      this.plantsToDisplay = [...data];
    });
  }

  getCategoriesFromPlants(plants: Plant[]): string[]{
    // Retourner un tableau contenant les catégories des plantes de manière unique
    //plants= tableau de tt plantes
    //1- je map : plants.map(x => x.categorie)
    //2- supprimer doublons dc j'y applique le set
    //3- je passe ce set en tableau
    const chqCategories = new Set(plants.map((x) => x.categorie)); //map(x=>x.categorie) permet de creer un nvo tableau qui contient les valeurs de la propriété"categorie" de chq objet du tableau plants
    console.log('SET DE CATEGORIES', chqCategories); //le new vient créer le nvl affichage?
    const tableauCategories = Array.from(chqCategories); //voir autre methode plus loin, plus courante
    console.log('UN VRAI TABLEAU DE CAT', tableauCategories);
    return tableauCategories;
  }

  // filterPlantsByCategories(categories: string[]){
  // console.log('par le parent', categories);
  //   this.plantsToDisplay = this.allPlants.filter((x)=>categories.includes(x.categorie));  
  // }

  // textSaisieEnfant () {
  //   // console.log("parent", this.sauvegardeTexteSaisie);
  //   this.plantsToDisplay = this.plantsEnDur.filter((y) =>
  //     y.nom.toLowerCase()
  //       .includes(this.sauvegardeTexteSaisie.toLocaleLowerCase())
  //   );
  // }

  onSearch (valeurSaisie : string) {
    this.sauvegardeTexteSaisie = valeurSaisie;
    console.log('sauvegardeTexteSaisie', this.sauvegardeTexteSaisie);
    this.methodeGenerale();
  }

  onSelector (filtreSaisie : string[]) {
    this.sauvegardeFiltre = filtreSaisie;
    console.log('sauvegardeFiltre', this.sauvegardeFiltre);
    this.methodeGenerale();
  }

  methodeGenerale () {
    this.plantsToDisplay = this.allPlants.filter((x) => this.sauvegardeFiltre.includes(x.categorie));
    this.plantsToDisplay = this.plantsToDisplay.filter((x) => x.nom.toLowerCase().includes(this.sauvegardeTexteSaisie.toLowerCase()))
  }
  }
 /*ou passer du set en tableau: const tab = [...chqCategorie]; === spread operateur, 
 le set creee objet de type set avec les valeurs et le spread il reprd ces valeurs pr les mette ds un tableau*/