import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product : {
  id: number,
  name: string,
  description: string,
  brand: string,
  gender: string,
  category: string,
  size: number[],
  color: string[],
  price: number,
  is_in_inventory: boolean,
  discountPrice?: number,
  items_left: number,
  imageURL: string,
  slug: string 
}

}
