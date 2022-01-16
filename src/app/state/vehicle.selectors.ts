import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './vehicle.reducer';

export const selectVehicleFeature = createFeatureSelector<State>('vehicles')
export const selectVehicles = createSelector(selectVehicleFeature, s => {
  return s.vehicles; }
);
