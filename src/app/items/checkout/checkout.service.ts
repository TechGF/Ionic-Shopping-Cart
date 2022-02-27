import { Injectable } from '@angular/core';
import { Items } from '../items.interface';
import { ItemsService } from '../items.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  checkoutItems: Items[] = [];

  constructor() {}

  calcTotal(cItem: Items[]) {
    return cItem.reduce((i, j) => i + j.price * j.quantity, 0);
  }
  getTotalQuantity(cItem: Items[]) {
    return cItem.reduce((i, j) => i + j.quantity, 0);
  }
  clear(cItem: Items[]) {
    this.checkoutItems.forEach((i, j) => {
      i.quantity = 0;
    });
    cItem.splice(0, cItem.length);
  }
}
