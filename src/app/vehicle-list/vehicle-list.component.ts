import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../domain/vehicle';
import { VehicleAppState } from '../state/vehicle.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectVehicles } from '../state/vehicle.selectors';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicles$: Observable<Vehicle[]>;


  constructor(private store: Store<VehicleAppState>) {
    this.vehicles$ = store.select(selectVehicles);
  }

  ngOnInit(): void {

  }

}
