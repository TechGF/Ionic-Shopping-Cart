import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsPageRoutingModule } from './items-routing.module';

import { ItemsPage } from './items.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ItemsPage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ItemsPageRoutingModule],
  declarations: [ItemsPage],
})
export class ItemsPageModule {}
