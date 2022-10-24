import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ProductsComponent } from './views/products/products.component';
import { RecipesComponent } from './views/recipes/recipes.component';
import { ProductCardComponent } from './shared-components/product-card/product-card.component';
import { ProductsInnerComponent } from './views/products-inner/products-inner.component';
import { RecipeCardComponent } from './shared-components/recipe/recipe-card/recipe-card.component';
import { RecipesInnerComponent } from './views/recipes-inner/recipes-inner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProductsComponent,
    RecipesComponent,
    ProductCardComponent,
    ProductsInnerComponent,
    RecipeCardComponent,
    RecipesInnerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
