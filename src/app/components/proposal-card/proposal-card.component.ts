import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Proposal } from 'src/app/models/proposal';

@Component({
  selector: 'app-proposal-card',
  templateUrl: './proposal-card.component.html',
  styleUrls: ['./proposal-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProposalCardComponent {
  @Input() proposal: Proposal | undefined | null;

  public showIcon = faAngleRight;
}
