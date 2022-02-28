import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OsobaZoznamComponent} from "./osoba-zoznam/osoba-zoznam.component";
import {OsobaFormularComponent} from "./osoba-formular/osoba-formular.component";
import {AppComponent} from "./app.component";

//cesty ktore chceme pouzivat v ramci aplikacie - je to pole objektov
const routes: Routes = [
  {
    path: 'osoba/zoznam',
    component: OsobaZoznamComponent
  },
  {
    path: 'osoba/formular',
    component: OsobaFormularComponent
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
