import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Request } from '../models/request.model';
import { User } from '../models/user.model';

// configure base url
const requestRoute = '/request';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private url = environment.apiBaseUrl + requestRoute;

  constructor(private http: HttpClient) {}

  // http://localhost:8080/requests/
  getAll(): Observable<Request[]> {
    let requestUrl = this.url + '/';
    return this.http.get<Request[]>(requestUrl);
  }

  getAllByUser(user: User): Observable<Request[]> {
    return this.http.put<Request[]>(this.url, user);
  }

  getById(id: number): Observable<Request[]> {
    let requestUrl = this.url + '/' + id;
    return this.http.get<Request[]>(requestUrl);
  }

  // http://localhost:8080/requests/{id}
  createRequest(request: Request): Observable<Request[]> {
    return this.http.post<Request[]>(this.url, request);
  }

  editRequest(request: Request): Observable<Request[]> {
    return this.http.put<Request[]>(this.url, request);
  }
}
