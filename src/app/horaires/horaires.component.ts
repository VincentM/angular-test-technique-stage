import { Component, OnInit } from '@angular/core';
import { Horaire } from '../horaire'
import { HORAIRES } from '../mock-horaires';


@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.component.html',
  styleUrls: ['./horaires.component.css']
})
export class HorairesComponent implements OnInit {
  horaires =HORAIRES;
  selectedHoraire: Horaire;


  constructor() { }

  ngOnInit() {
  }

  onSelect(horaire: Horaire): void {
  this.selectedHoraire = horaire;
}

}
