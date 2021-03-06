import {Component, Input, OnInit} from '@angular/core';
import {RecipeInterface} from '../../interfaces/recipe.interface';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe: RecipeInterface;

    constructor() {
    }

    ngOnInit() {
    }

}
