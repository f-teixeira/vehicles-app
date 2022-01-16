import { Vehicle } from '../domain/vehicle';
import { createAction, props } from '@ngrx/store';

export const editVehicle = createAction(
  'Edit Vehicle',
  props<{vehicle: Vehicle}>()
);

export const vehiclesLoaded = createAction(
  'Vehicles Loaded',
  props<{vehicles: Vehicle[]}>()
);

