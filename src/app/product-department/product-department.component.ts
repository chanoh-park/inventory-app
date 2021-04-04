import { Product } from './../model/product.model';
import { Component, Input, OnInit } from '@angular/core';

/**
 * @ProductDepartment: 제품 분류에 해당하는 브레드크럼을 보여 주는 컴포넌트
 */
@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.scss'],
})
export class ProductDepartmentComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit(): void {}
}
