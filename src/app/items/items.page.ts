import { Component, OnInit } from '@angular/core';
import { Items } from './items.interface';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  items: Items[];
  cart: Items[];

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.items = this.itemsService.getAllItems();
  }

  onAddItem(i: Items) {
    this.itemsService.addItem(i);
  }
  onRemoveItem(i: Items) {
    this.itemsService.decreaseItem(i);
  }
}
