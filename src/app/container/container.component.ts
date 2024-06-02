import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // name ="John Doe"
  // addToCart = 0;
  // product = {
  // name : 'iPhone 13',
  // price : 999,
  // color : 'Red',
  // discount : 8.5,
  // inStock : 5,
  // pImage : 'https://th.bing.com/th?id=OPAC.p%2fUVE1XJiLVmIg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1'
  // }

  // getDiscountedPrice(){
  //   return this.product.price - ((this.product.price  * this.product.discount)/100)
  // }
  
  // onNamechange(event : any){
  //   // this.name = event.target.value
  //   // console.log(event.target.value)
  // }

  // decrementCartValue(){
  //   if(!(this.addToCart<=0)){
  //   this.addToCart--;
  //   }
  // }

  // incrementCartValue(){
  //   if(this.product.inStock > this.addToCart )
  //   this.addToCart++;
  // }

  listOfString : string[] = ['Mark', 'Shubham' ,'Nayan' ,'Vidhi'];

}
