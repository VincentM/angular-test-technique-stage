import { Component, OnInit } from '@angular/core';
import { Trafic } from '../trafic';
import { TRAFICS } from '../mock-trafics';

@Component({
  selector: 'app-trafics',
  templateUrl: './trafics.component.html',
  styleUrls: ['./trafics.component.css']
})
export class TraficsComponent implements OnInit {
  trafics =TRAFICS;
  selectedTrafic: Trafic;


  constructor() { }

  ngOnInit() {
  }

  onSelect(trafic: Trafic): void {
  this.selectedTrafic = trafic;
}

}
