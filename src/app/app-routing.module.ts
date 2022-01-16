import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';


const routes: Routes = [
  { path: 'list', component: VehicleListComponent},
  { path: 'edit/:id', component: EditVehicleComponent},
  { path: '',   redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
