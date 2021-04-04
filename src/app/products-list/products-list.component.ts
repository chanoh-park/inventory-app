import { Product } from './../model/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * @ProductsList: ProdcutRows 전체를 렌더링하고
 * 현재 선택된 Product를 저장하는 컴포넌트
 */
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  /**
   * @input productList - 전달된 product[]
   */
  @Input() productList: Product[];

  /**
   * @output onProductSelected - 새 Product가 선택될 때마다
   * 현재 Product 출력
   */
  @Output() onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - 현재 선택된 `Product`가 포함된 로컬상태
   */
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit(): void {}

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
