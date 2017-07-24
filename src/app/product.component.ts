import { Component } from '@angular/core';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
})
export class ProductComponent {
    name : string = "Phone";
    price : number = 20000;
    features : string [] = ["12MP Cmaera","3000mAH Battery","4GB RAM"];

    addNewFeature(feature : string) : void{
        this.features.push(feature);
    }
}