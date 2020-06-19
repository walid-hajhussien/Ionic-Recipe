import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeInterface} from '../../interfaces/recipe.interface';
import {RecipeService} from '../../services/recipe/recipe.service';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.page.html',
    styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
    private id: string;
    public recipe: RecipeInterface;

    constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
        this.activatedRoute.paramMap.subscribe((params) => {
            if (!params.has('id')) {
                // todo: redirect to recipe
                return;
            }
            this.id = params.get('id');
            this.recipe = recipeService.getRecipeById(this.id);
        });
    }

    ngOnInit() {
    }

}
