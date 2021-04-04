import { Product } from './../model/product.model';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

/**
 * 제품의 이미지 하나를 보여 주는 컴포넌트
 */
@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss'],
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() {}

  ngOnInit(): void {}
}
