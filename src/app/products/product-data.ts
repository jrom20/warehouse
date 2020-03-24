import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        id: 1,
        productName: 'IMMUVIT PLUS Q10 X 30 CAPSULAS',
        productCode: '0033-0021',
        releaseDate: 'Marzo 22, 2020',
        description: 'IMMUVIT PLUS Q10 X 30 CAPSULAS',
        price: 366.26,
        starRating: 4.2,
        imageUrl: 'assets/images/immuvit.jpg',
      },
      {
        id: 2,
        productName: 'BRONCOPULMIN MENTORUB UNGUENTO TARROX25G',
        productCode: '010-3542',
        releaseDate: 'Marzo 22, 2020',
        description: 'BRONCOPULMIN MENTORUB UNGUENTO TARROX25G',
        price: 35.00,
        starRating: 4.0,
        imageUrl: 'assets/images/broncopulmin.jpg'
      },
      {
        id: 5,
        productName: 'NAPROX 550MG CAJA POR 12 CAPLETAS',
        productCode: '0010-0606',
        releaseDate: 'Marzo 22, 2020',
        description: 'NAPROX 550MG CAJA POR 12 CAPLETAS',
        price: 146.34,
        starRating: 4.8,
        imageUrl: 'assets/images/naprox.jpg',
      },
      {
        id: 8,
        productName: 'DOLO-NEUROBION X 1 GRAGEA',
        productCode: '0024-1139',
        releaseDate: 'Marzo 22, 2020',
        description: 'DOLO-NEUROBION X 1 GRAGEA',
        price: 13.12,
        starRating: 3.7,
        imageUrl: 'assets/images/dolo.jpg'
      },
      {
        id: 10,
        productName: 'DYMATIZE ELITE CHOCOLATE FUDGE 5LB',
        productCode: '1543-0033',
        releaseDate: 'Marzo 22, 2020',
        description: 'DYMATIZE ELITE CHOCOLATE FUDGE 5LB',
        price: 1899.50,
        starRating: 3.6,
        imageUrl: 'assets/images/elite.jpg'
      }
    ];

    return { products };
  }
}
