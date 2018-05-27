import { Component, OnInit } from '@angular/core';
import { Ligne } from '../ligne';
import { LIGNES } from '../mock-lignes';

import { LigneService } from '../ligne.service';

@Component({
  selector: 'app-lignes',
  templateUrl: './lignes.component.html',
  styleUrls: ['./lignes.component.css']
})
export class LignesComponent implements OnInit {

   

  lignes :Ligne[];
  selectedLigne: Ligne;


  constructor(private ligneService: LigneService) { }

  ngOnInit() {
    this.getLignes();
  }

  onSelect(ligne: Ligne): void {
  this.selectedLigne = ligne;
  }
  getLignes(): void {
  this.ligneService.getLignes().subscribe(lignes=>{
    console.log(lignes);
    this.lignes=lignes
    });
  }


}
