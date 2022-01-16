import { Vehicle } from '../domain/vehicle';
import { createReducer, on } from '@ngrx/store';
import { editVehicle, vehiclesLoaded } from './vehicle.actions';

export const vehiclesFeatureKey = 'vehicles';

export interface State {
  vehicles: Vehicle[]
}

export const initialState: State = {
  vehicles: []
}

export interface VehicleAppState {
  vehicleApp: State
}

export const vehiclesReducer = createReducer(
  initialState,
  on(editVehicle, (state, {  vehicle }) => {
    const currentVehicles = [ ...state.vehicles ];
    const idx = currentVehicles.findIndex(f => f.id == vehicle.id);
    currentVehicles[idx] = vehicle;
    return { vehicles: currentVehicles };
  }),
  on(vehiclesLoaded, (state, { vehicles}) => ({ vehicles: vehicles }))
);


