import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full',
  },
  {
    path: 'items',
    // I want to have a path recipes which loads my recipes page module
    // And in the child page I can use the recipe ID
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./items/items.module').then((m) => m.ItemsPageModule), //connect to homepage
      },
      {
        path: ':itemId',
        loadChildren: () =>
          import('./items/item-detail/item-detail.module').then(
            (m) => m.ItemDetailPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
