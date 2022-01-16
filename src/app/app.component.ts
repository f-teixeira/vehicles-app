import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { VehicleAppState } from './state/vehicle.reducer';
import { Store } from '@ngrx/store';
import { vehiclesLoaded } from './state/vehicle.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private vehicleService: VehicleService,
              private store: Store<VehicleAppState>) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(vl => this.store.dispatch(vehiclesLoaded({ vehicles: vl })));
  }


}
