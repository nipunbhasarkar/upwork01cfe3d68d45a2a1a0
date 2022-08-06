import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Areas } from '../models/areas';
import { ProductInfo } from '../models/product-info';
import { Proposal } from '../models/proposal';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  public getAreas(): Observable<Areas[]> {
    const area1 = new Areas(1, 'Irrigation Room');
    const area2 = new Areas(2, 'Living Room');
    const area3 = new Areas(3, 'Dining Room', ['Option 1', 'Option 2']);
    const area4 = new Areas(4, 'Bedroom 1');
    const area5 = new Areas(5, 'Bedroom 2');
    const area6 = new Areas(6, 'Childrens Room');
    return of([area1, area2, area3, area4, area5, area6]);
  }

  public getProductInfo(): Observable<ProductInfo> {
    return of(new ProductInfo(1, 'Sony', 'XR-65X90J', 2299, 2399.99, '15.5%'));
  }
  public getProposal(): Observable<Proposal> {
    return of(new Proposal(2033, 'Dwight Schrute', 'America Room Upgrades'));
  }
}
