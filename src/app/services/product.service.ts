import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';



//configure base url
const productRoute = "/products"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = environment.apiBaseUrl + productRoute

  //get all products
  //http://localhost:8080/products/
  getAll() : Observable<Product[]> {
    let requestUrl = this.url + '/';
    return this.http.get<Product[]>(requestUrl)
  }
  //get product by id
  //http://localhost:8080/users/{id}
  getById (id: number) : Observable<Product[]> {
  let requestUrl = this.url + '/' + id
  return this.http.get<Product[]>(requestUrl);
  }}
