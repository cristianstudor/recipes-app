import { Component, OnDestroy, OnInit } from '@angular/core';
import { IRecipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: IRecipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    console.log('ngOnInit');
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllReceipes();
    console.log('ionViewWillEnter');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
