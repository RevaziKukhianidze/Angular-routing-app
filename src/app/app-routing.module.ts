import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './views/homepage/homepage.component';
import { ProductsInnerComponent } from './views/products-inner/products-inner.component';
import { ProductsComponent } from './views/products/products.component';
import { RecipesInnerComponent } from './views/recipes-inner/recipes-inner.component';
import { RecipesComponent } from './views/recipes/recipes.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'products/inner/:productsId', component: ProductsInnerComponent },
  { path: 'recipes/inner/:recipeId', component: RecipesInnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
