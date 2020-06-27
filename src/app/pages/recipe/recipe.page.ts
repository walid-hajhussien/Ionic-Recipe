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
    counter: number;

    constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.counter = 0;
    }

    ngOnInit() {
        this.recipes = this.recipeService.recipes;
        console.log('recipes', this.recipes);
    }


    onShowRecipe(id: string): void {
        this.router.navigate([id], {relativeTo: this.activatedRoute});
    }


    ionViewWillEnter() {
        console.log('ionViewWillEnter', ++this.counter);
    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter', ++this.counter);
    }

    ionViewWillLeave() {
        console.log('ionViewWillLeave', ++this.counter);
    }

    ionViewDidLeave() {
        console.log('ionViewDidLeave', ++this.counter);
    }

}
