import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-tags',
  templateUrl: './option-tags.component.html',
  styleUrls: ['./option-tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionTagsComponent {
  @Input() options: string[] | undefined;
}
