import {Component, OnInit} from '@angular/core';
import {RecipeInterface} from '../../interfaces/recipe.interface';
import {RecipeService} from '../../services/recipe/recipe.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.page.html',
    styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
    recipes: RecipeInterface[] = [];

    constructor(private recipeService: RecipeService) {
        this.recipes = recipeService.recipes;
    }

    ngOnInit() {
    }

    onAdd() {
        this.recipeService.setRecipe({
            id: '3',
            title: 'Fish',
            imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2018/04/Fish-with-Lemon-Butter-Sauce.jpg',
            ingredients: ['Fish', 'Bread']
        });
    }

}
