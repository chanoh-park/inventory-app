import { Product } from './model/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  product: Product;

  constructor() {
    this.product = new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99
    );
  }
}
