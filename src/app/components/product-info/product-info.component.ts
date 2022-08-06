import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductInfo } from 'src/app/models/product-info';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {
  @Input() productInfo: ProductInfo | undefined | null;
}
