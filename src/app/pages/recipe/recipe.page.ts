import {Component, OnInit} from '@angular/core';
import {RecipeInterface} from '../../interfaces/recipe.interface';
import {RecipeService} from '../../services/recipe/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.page.html',
    styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
    recipes: RecipeInterface[] = [];

    constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.recipes = this.recipeService.recipes;
    }


    onShowRecipe(id: string): void {
        this.router.navigate([id], {relativeTo: this.activatedRoute});
    }

}
