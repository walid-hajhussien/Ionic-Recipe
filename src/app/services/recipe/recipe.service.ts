import {Injectable} from '@angular/core';
import {RecipeInterface} from '../../interfaces/recipe.interface';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    private recipesData: RecipeInterface[] = [{
        id: '1',
        title: 'Chicken',
        imageUrl: 'https://cafedelites.com/wp-content/uploads/2018/06/Garlic-Mushroom-Chicken-Thighs-IMAGE-1.jpg',
        ingredients: ['chicken,Bread,milk']
    }, {
        id: '2',
        title: 'Meat',
        imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/roast-beef-recipes.jpg',
        ingredients: ['Meat,Bread,milk']
    }];

    constructor() {
    }

    get recipes() {
        return this.recipesData;
    }

    setRecipe(value: RecipeInterface): void {
        this.recipesData.push(value);
    }

    getRecipeById(id: string): RecipeInterface {
        // NOTE:  using filter
        /*
         return this.recipesData.filter((value, index) => {
            return value.id === id;
        });
         */

        // using find
        return this.recipesData.find((recipe: RecipeInterface) => {
            return recipe.id === id;
        });

    }
}
