import { Product } from './../model/product.model';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

/**
 * 제품 하나를 보여 주는 컴포넌트
 */
@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss'],
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() {}

  ngOnInit(): void {}
}
