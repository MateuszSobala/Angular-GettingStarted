import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Root injector - service is available throughout the entire application
  // new in Angular 6, before it was done by adding the service in providers of @NgModule
})
export class ProductService {

  private productUrl = 'api/products/products.json'; // we can read local file,
  // because the src/api directory was added to assets of angular.json
  // 'http://localhost:3000/products';
  // run json-server ./src/api/products/products.json

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))), // for debugging purposes
        map(data => data['products']),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }

  getProductsHardcoded(): IProduct[] {
    return [
      {
        'productId': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
      },
      {
        'productId': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2016',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      },
      {
        'productId': 5,
        'productName': 'Hammer',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2016',
        'description': 'Curved claw steel hammer',
        'price': .9, // should appear as 0,90
        'starRating': 4.8,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
      },
      {
        'productId': 8,
        'productName': 'Saw',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2016',
        'description': '15-inch steel blade hand saw',
        'price': 11.558, // should appear as 11,56
        'starRating': 3.7,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
      },
      {
        'productId': 10,
        'productName': 'Video Game Controller',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2015',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
      }
    ];
  }
}
