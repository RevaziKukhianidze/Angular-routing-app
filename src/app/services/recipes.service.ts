import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  apiUrlsForAllRecipes: string =
    'https://europroductcms.azurewebsites.net/api/fetchRecipesStepByStep/1/1000';

  apiUrlForSingleRecipe: string =
    'https://europroductcms.azurewebsites.net/api/getRecipeById';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get(this.apiUrlsForAllRecipes);
  }

  getSingleRecipeById(recipeId: number): any {
    let fullUrl: string = `${this.apiUrlForSingleRecipe}/${recipeId}`;
    return this.http.get(fullUrl);
  }
}
