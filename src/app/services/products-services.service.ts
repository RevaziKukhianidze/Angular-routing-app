import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsServicesService {
  apiUrlsForProducts: string =
    'https://europroductcms.azurewebsites.net/api/fetchProducysStepByStep/1/500';

  getProductByIdUrl: string =
    'https://europroductcms.azurewebsites.net/api/getProductById';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrlsForProducts);
  }

  getProductById(productId: number): any {
    let fullUrl: string = `${this.getProductByIdUrl}/${productId}`;
    return this.http.get(fullUrl);
  }
}
