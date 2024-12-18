import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BillModel } from '../../model/bill.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cart = new BehaviorSubject<BillModel[]>([]); 
  selectedCartitems$= this.cart.asObservable();

  constructor() { }

  addProductToCart(product:BillModel){
    const currentItems= this.cart.value;
    this.cart.next([...currentItems,product]);
  }
  removeProduct(product: BillModel): void {
    const currentProducts = this.cart.value.filter(p => p !== product);
    this.cart.next(currentProducts);
  }
}
