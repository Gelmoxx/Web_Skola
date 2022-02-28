import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { Osoba } from './models/osoba.model';



//importnut si osobu, zmenit pole z any na Osoba, vytvorit angular schematics -> component -> osoba-zoznam
// Angular Schematics -> modue -> osoba --routing -> vytvorí aj rooty
//Vytvorili sme aj app-routing module a pridali ho aj do imports v app.module.ts
enum MENU {
  OSOBY,
  KNIHY,
  VYPOZICKY
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priklad2';
  cenaKs:number = 0;
  mnozstvo:number = 0;
  spolu:number = 0;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      cenaKs: new FormControl(),
      mnozstvo: new FormControl()
    })
  }

  public pracuj(): void{
    alert("Karlíto");
  }

  public sum(): void{
    this.spolu = this.cenaKs * this.mnozstvo;
  }
  //skry / zobraz
  // zobraz = true;
  // public skry(): void{
  //   this.zobraz = !this.zobraz;
  // }
  //disabled / not-disabled
  zakaz = true;
  public disable(): void{
    this.zakaz = !this.zakaz;
  }

  menu = MENU;
  aktMenu: MENU = MENU.OSOBY;
  public vyberMenu(m: MENU): void{
    this.aktMenu = m;

  }

  //zoznam
  osoby: Osoba[] = [];
  //objekt
  osoba = { meno: "Tomáš", priezvisko: "Peregrín"};

  public pridajOsobu(): void{
    let o2 = { meno: this.osoba.meno, priezvisko: this.osoba.priezvisko};
    this.osoby.push(o2);
  }

  knihy: any = [];
  kniha = { nazov: "The Witcher", autor: "Dj Tošo"};

  public pridajKnihu(): void{
    let k2 = { nazov: this.kniha.nazov, autor: this.kniha.autor};
    this.knihy.push(k2);
  }



}

