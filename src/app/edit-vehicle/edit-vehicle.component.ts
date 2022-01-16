import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../domain/vehicle';
import { flatMap, map } from 'rxjs/operators';
import { VehicleAppState } from '../state/vehicle.reducer';
import { Store } from '@ngrx/store';
import { selectVehicles } from '../state/vehicle.selectors';
import { ToastrService } from 'ngx-toastr';
import { editVehicle } from '../state/vehicle.actions';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss']
})
export class EditVehicleComponent implements OnInit {

  vehicle: Vehicle;

  id: string;
  constructor(private route: ActivatedRoute,
              private store: Store<VehicleAppState>,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
      flatMap(p =>
        this.store.select(selectVehicles).pipe( map(vl=> vl.filter(v => v.id == p['id'])))
      )).subscribe(list => this.vehicle = { ...list[0] });
  }

  saveVehicle() {
    this.store.dispatch(editVehicle({ vehicle: this.vehicle }));
    this.toastr.success('', 'Veiculo Actualizado');
    this.router.navigateByUrl("/list");
  }

}
