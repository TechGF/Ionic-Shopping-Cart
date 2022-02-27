import { Component, OnInit } from '@angular/core';
import { Items } from '../items.interface';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  loadItem: Items;
  constructor(
    private activeRoute: ActivatedRoute,
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('itemId')) {
        //redirect
        return;
      }
      const itemId = paramMap.get('itemId');
      this.loadItem = this.itemsService.getItem(itemId);
    });
  }
  onAddItem() {
    this.itemsService.addItem(this.loadItem);
  }
  onRemoveItem() {
    this.itemsService.decreaseItem(this.loadItem);
  }
  onDeleteItem() {
    this.itemsService.deleteItem(this.loadItem.id);
  }
}
