import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './domain/vehicle';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<any>("assets/vehicles.mock.json")
      .pipe(
        map(this.convertToVehicleList)
      );
  }

  private convertToVehicleList(fileContent: any): Vehicle[] {
    let objList: any[] = fileContent._embedded.results;
    return objList.map(o => {
      let obj: any = o.object;
      return {
        id: o.index_id,
        image: obj.images[0].thumbnail,
        kms: obj.kms,
        licensePlate: obj.license_plate,
        make: obj.brand.name,
        model: obj.model.name,
        series: obj.serie.name,
        year: obj.register_year,
        privatePrice: obj.price,
        professionalPrice: obj.price_b2b
      }
    });
  }
}
