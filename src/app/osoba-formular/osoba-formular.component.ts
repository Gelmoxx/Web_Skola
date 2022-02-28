import { Component, OnInit } from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-formular',  //cez selector vlozime komponent do dalsieho komponentu
  templateUrl: './osoba-formular.component.html',
  styleUrls: ['./osoba-formular.component.css']
})
export class OsobaFormularComponent implements OnInit {

  osoba: Osoba = { meno: "Tomáš", priezvisko: "Peregrín"};

  osoby: Osoba[] = [];

  public pridajOsobu(): void{
    let o2 = { meno: this.osoba?.meno, priezvisko: this.osoba?.priezvisko};
    this.osoby.push(o2);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
