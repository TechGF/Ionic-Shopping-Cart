import { Component, OnInit } from '@angular/core';
import { Items } from '../items.interface';
import { ItemsService } from '../items.service';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  checkoutItems: Items[];
  constructor(
    private checkoutService: CheckoutService,
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.checkoutItems = this.itemsService.getCart();
  }
  onAddItem(item) {
    this.itemsService.addItem(item);
  }
  onRemoveItem(item) {
    this.itemsService.decreaseItem(item);
  }
  onCartTotal() {
    return this.checkoutService.calcTotal(this.checkoutItems);
  }
  onCartTotalQuantity() {
    return this.checkoutService.getTotalQuantity(this.checkoutItems);
  }
  onClear() {
    this.checkoutService.clear(this.checkoutItems);
  }
}
