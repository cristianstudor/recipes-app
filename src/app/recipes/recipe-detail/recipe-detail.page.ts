import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { IRecipe } from '../recipe.model';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe!: IRecipe;
  isIOS: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private platform: Platform,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        // redirect user
        this.router.navigate(['/recipes']);
        return;
      }

      const recipeId = paramMap.get('recipeId') as string;
      const recipe = this.recipeService.getRecipe(recipeId);

      if (recipe !== undefined) {
        this.loadedRecipe = recipe;
      } else {
        this.router.navigate(['/recipes']);
      }
    });

    this.isIOS = this.platform.is('ios');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy', 'Recipe Item');
  }

  async onDeleteRecipe() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          },
        },
      ],
    });

    alert.present();
  }
}
