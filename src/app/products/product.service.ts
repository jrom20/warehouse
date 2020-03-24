import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductService 
{
  private productsUrl = 'api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.productsUrl)
        .pipe(catchError(this.errorHandler<Product[]>('getProducts', [])));
  }

  getProduct(id: number): Observable<Product> {
    
    return null;
  }

  createProduct(product: Product): Observable<Product> {
    return null;
  }

  deleteProduct(id: number): Observable<{}> {
    return null;
  }

  updateProduct(product: Product): Observable<Product> {
    return null;
  }

  private errorHandler<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T)
    }
  }

  private initializeProduct(): Product {
    return {
      id: 0,
      productName: null,
      productCode: null,
      tags: [''],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }
}
