import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from '../models/vendor.model';

// configure base url
const vendorRoute = '/vendors';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  url = environment.apiBaseUrl + vendorRoute;

  constructor(private http: HttpClient) {}

  // http://localhost:8080/vendors/
  getAll(): Observable<Vendor[]> {
    let requestUrl = this.url + '/';
    return this.http.get<Vendor[]>('http://localhost:8080/vendors/');
  }

  // http://localhost:8080/users/{id}
  getById(id: number): Observable<Vendor[]> {
    let requestUrl = this.url + '/' + id;
    return this.http.get<Vendor[]>(requestUrl);
  }
}
