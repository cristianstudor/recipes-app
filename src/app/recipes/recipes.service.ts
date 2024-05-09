import { Injectable } from '@angular/core';
import { IRecipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: IRecipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://media.istockphoto.com/id/1356053628/photo/fried-pork-chop-with-lettuce-and-lemon-on-wooden-table.jpg?s=612x612&w=0&k=20&c=sUXQT7gkkFSyrS09xXmSAcZ_hRh0Ns5xdaKfTg2ZYPg=',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spagetti',
      imageUrl:
        'https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.jpg?s=612x612&w=0&k=20&c=SeEWmJfPQlX1zVUHPKjL-cgYeMs9cZ97-kdZMm7feA4=',
      ingredients: ['Spagetti', 'Meat', 'Tomatoes'],
    },
  ];

  constructor() {}

  getAllReceipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return this.recipes.find((recipe) => recipe.id === recipeId);
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((receipe) => {
      return receipe.id !== recipeId;
    });
  }
}
