import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.css'],
})
export class FilterSideBarComponent {
  @Input() categoriesToDisplay!: string[];
  checkedCategories: string[] = []; //je mets ma propriété ici pour eviter d'annuler ce qui était précedement sélectionné
  @Output() categoriesToFilter = new EventEmitter <string[]>() ;

  onCheckedCategories(event: Event) {
    // console.log(event);
    // console.log(event.target.checked);
    // console.log(event.target.values);
    // taget est l'évenement d'où est parti l'evenement
    const target = event.target as HTMLInputElement;
    // console.log(target);
    // checkedCategories = this.categoriesToDisplay;
    // console.log('lala', checkedCategories);
    if (target.checked) {
      if(this.checkedCategories.length===this.categoriesToDisplay.length){
        this.checkedCategories=[];
      }
      this.checkedCategories.push(target.value); //je push mes categories checkées à l'interieur
    } else {
      this.checkedCategories = this.checkedCategories.filter((categorie)=>categorie !== target.value);
    } 
    if (this.checkedCategories.length === 0) {
      this.checkedCategories = [...this.categoriesToDisplay];
    }    
    this.categoriesToFilter.emit(this.checkedCategories);
  }
}
/**
   * Lorsqu'un user coche une checkbox
   * -> On l'ajoute à un tableau de catégorie cochée
   *
   * Lorsqu'un user coche une checkbox après avoir tout décoché
   * -> On doit d'abord vider notre tableau
   * -> et l'ajoute à un tableau de catégorie cochée
   *
   * Lorsqu'un user décoche une checkbox
   * -> On la retire du tableau de catégorie cochée
   *
   * Lorqu'aucune catégorie n'est coché
   * -> On met toute les catégorie par défaut
   *
   */