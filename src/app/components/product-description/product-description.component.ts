import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  faCross,
  faMinusCircle,
  faXRay,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Areas } from 'src/app/models/areas';
import { ProductInfo } from 'src/app/models/product-info';
import { Proposal } from 'src/app/models/proposal';
import { MockApiService } from 'src/app/services/mock-api.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDescriptionComponent {
  constructor(private mockApiService: MockApiService) {
    this.areas$ = this.mockApiService.getAreas();
    this.productInfo$ = this.mockApiService.getProductInfo();
    this.proposal$ = this.mockApiService.getProposal();
  }

  public areas$: Observable<Areas[]>;
  public productInfo$: Observable<ProductInfo>;
  public proposal$: Observable<Proposal>;
  public closeIcon = faMinusCircle;
}
