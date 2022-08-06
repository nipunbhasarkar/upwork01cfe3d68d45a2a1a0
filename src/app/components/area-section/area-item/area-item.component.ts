import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Areas } from 'src/app/models/areas';

@Component({
  selector: 'app-area-item',
  templateUrl: './area-item.component.html',
  styleUrls: ['./area-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaItemComponent {
  @Input() area: Areas | undefined | null;
  public checked = false;
}
