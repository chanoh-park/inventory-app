import { Component, Input, OnInit } from '@angular/core';

/**
 * 제품 가격을 보여 주는 컴포넌트
 */
@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss'],
})
export class PriceDisplayComponent implements OnInit {
  @Input() price: number;

  constructor() {}

  ngOnInit(): void {}
}
