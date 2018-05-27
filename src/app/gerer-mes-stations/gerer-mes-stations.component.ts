import { Component, OnInit } from '@angular/core';

import { Ligne } from '../ligne';
import { LigneService } from '../ligne.service';
@Component({
  selector: 'app-gerer-mes-stations',
  templateUrl: './gerer-mes-stations.component.html',
  styleUrls: ['./gerer-mes-stations.component.css']
})
export class GererMesStationsComponent implements OnInit {
  lignes: Ligne[]=[];

  constructor(private ligneService: LigneService) { }

  ngOnInit() {
    this.getLignes();
  }
  getLignes(): void {
    this.ligneService.getLignes()
      .subscribe(lignes => this.lignes = lignes.slice(0, 5));
  }

}
