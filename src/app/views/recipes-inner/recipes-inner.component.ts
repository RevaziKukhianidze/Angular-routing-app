import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-inner',
  templateUrl: './recipes-inner.component.html',
  styleUrls: ['./recipes-inner.component.css'],
})
export class RecipesInnerComponent implements OnInit {
  currentRecipe: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((response) => {
      let recipeId = response['recipeId'];
      console.log('recipe response', response);
      console.log('recipeid', recipeId);
      this.recipesService
        .getSingleRecipeById(recipeId)
        .subscribe((resp: any) => {
          this.currentRecipe = resp;
        });
    });
  }
}
