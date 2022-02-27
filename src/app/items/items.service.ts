/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Items } from './items.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private items: Items[] = [
    {
      id: 'i1',
      title: 'Apple',
      imageUrl:
        'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834',
      price: 1.25,
      quantity: 0,
      description: [
        'Juicy delicious red apple that is high in fiber, vitamins and nutrients.',
      ],
    },
    {
      id: 'i2',
      title: 'Orange Juice',
      imageUrl:
        'https://m.media-amazon.com/images/I/51jCO1iZB5L._SX425_PIbundle-24,TopRight,0,0_AA425SH20_.jpg',
      price: 3.99,
      quantity: 0,
      description: [
        'Freshly squeezed oranges into juice formed. Very high in Vitamin C and antioxidants.',
      ],
    },
    {
      id: 'i3',
      title: 'Ground Beef',
      imageUrl:
        'https://embed.widencdn.net/img/beef/4hh1pywcnj/800x600px/Grind_Fine_85.psd?keep=c&u=7fueml',
      price: 5.99,
      quantity: 0,
      description: [
        'Minced beef that has been finely chopped with a meat grinder. You can make hamburgers or meatballs with ground beef.',
      ],
    },
    {
      id: 'i4',
      title: 'Bread',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Fresh_made_bread_05.jpg',
      price: 4.99,
      quantity: 0,
      description: [
        'A staple food prepared from a dough of flour and water, usually by baking. Important source of dietary fibre.',
      ],
    },
    {
      id: 'i5',
      title: 'Grapes',
      imageUrl:
        'https://www.meijer.com/content/dam/meijer/product/0000/00/0004/02/0000000004022_2_A1C1_1200.png',
      price: 7.99,
      quantity: 0,
      description: [
        'Delicious fruit that is packed with nutrients, antioxidants and plant compounds. It is a good source of potassium and minerals that helps balance fluids in your body.',
      ],
    },
    {
      id: 'i6',
      title: 'Ice Cream',
      imageUrl:
        'https://i5.walmartimages.com/asr/269e8595-442f-4200-bf26-acd02c5d12de.21d3d6de1b586c4ecf11e31b51652f2f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      price: 6.99,
      quantity: 0,
      description: [
        'Yummy sweetened frozen food that is typically eaten as a snack or dessert. It may be made from milk or cream and is flavored with a sweetener, like sugar and a spice, like vanilla or chocolate.',
      ],
    },
    {
      id: 'i7',
      title: 'Fried Chicken',
      imageUrl:
        'https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg',
      price: 7.49,
      quantity: 0,
      description: [
        'Deep fried chicken pieces that have been coated with seasoned flour or batter. The breading adds a crisp coating or crust to the exterior of the chicken while retaining juices in the meat.',
      ],
    },
    {
      id: 'i8',
      title: 'Spell Book',
      imageUrl: 'https://m.media-amazon.com/images/I/71w3afXQW0L._SL1010_.jpg',
      price: 9999.99,
      quantity: 0,
      description: [
        'A textbook of magic, typically including instructions on how to create magical objects like talismans and amulets, how to perform magical spells, charms and divination, and how to summon or invoke supernatural entities. This book contains powerful magical spells, a glossary of dangerous monsters and demons and how to vanquish them.',
      ],
    },
    {
      id: 'i9',
      title: 'Dagger',
      imageUrl:
        'https://i0.wp.com/sabersmith.com/wp-content/uploads/2020/06/6-in-dagger-satin-black-on-green-smooth.jpg?fit=800%2C1200&ssl=1',
      price: 10.25,
      quantity: 0,
      description: ['Sharp pointy knife. It is very sharp. Used in rituals.'],
    },
  ];

  private cart = [];
  private cartQuantity = new BehaviorSubject(0);
  constructor() {}

  getAllItems() {
    return [...this.items];
  }
  getCart() {
    return [...this.cart];
  }
  getCartQuantity() {
    return this.cartQuantity;
  }
  getItem(itemId: string) {
    return { ...this.items.find((item) => item.id === itemId) };
  }

  addItem(aItem: Items) {
    let added = false;
    for (const item of this.cart) {
      if (item.id === aItem.id) {
        item.quantity += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      aItem.quantity = 1;
      this.cart.push(aItem);
    }
    this.cartQuantity.next(this.cartQuantity.value + 1);
  }
  decreaseItem(aItem: Items) {
    for (const [index, item] of this.cart.entries()) {
      if (item.id === aItem.id) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartQuantity.next(this.cartQuantity.value - 1);
  }
  deleteItem(itemId: string) {
    this.items = this.items.filter((item) => item.id !== itemId);
  }
}
