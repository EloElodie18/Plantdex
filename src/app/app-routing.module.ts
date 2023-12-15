import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [ //fr ttes les routes dt on aura besoin pour le site
  { path: '', component: PageHomeComponent }, //http://localhost:4200  en ajoutant cette ligne, j'ai mon 3eme import qui s'ajoute=parametrage sur route, vers cette url
  { path: 'my-plants', component: PageMyPlantsComponent }, //idem pour le même url mais avec plants à la fin http://localhost:4200/my-plants
  { path: 'admin', component: PageAdminComponent }, 
  { path: '**' , component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
