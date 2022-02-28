import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-zoznam',
  templateUrl: './osoba-zoznam.component.html',
  styleUrls: ['./osoba-zoznam.component.css']
})
export class OsobaZoznamComponent implements OnInit {

  osoby: Osoba[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  chodNaFormular(): void{
    this.router.navigate(['/osoba/formular']);
  }

}
