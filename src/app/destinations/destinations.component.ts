import { Component, OnInit } from '@angular/core';
import { Destination } from '../destination';
import { DESTINATIONS } from '../mock-destinations';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  destinations = DESTINATIONS;
  selectedDestination: Destination;

  constructor() { }

  ngOnInit() {
  }
  onSelect(destination: Destination): void {
  this.selectedDestination = destination;
}

}
