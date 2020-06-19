import {Component, OnInit} from '@angular/core';
import {RecipeInterface} from '../../interfaces/recipe.interface';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.page.html',
    styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
    public recipes: RecipeInterface[] = [{
        id: '1',
        title: 'Chicken',
        imageUrl: 'https://cafedelites.com/wp-content/uploads/2018/06/Garlic-Mushroom-Chicken-Thighs-IMAGE-1.jpg',
        ingredients: ['chicken,Bread,milk']
    },{
      id: '2',
      title: 'Meat',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/roast-beef-recipes.jpg',
      ingredients: ['Meat,Bread,milk']
    }]

    constructor() {
    }

    ngOnInit() {
    }

}
