import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../domain/vehicle';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent implements OnInit {

  @Input()
  vehicle: Vehicle;

  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
