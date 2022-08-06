import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Areas } from 'src/app/models/areas';

@Component({
  selector: 'app-area-section',
  templateUrl: './area-section.component.html',
  styleUrls: ['./area-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaSectionComponent {
  @Input() areas: Areas[] | null | undefined;

  public iconSearch = faSearch;
  public iconAdd = faPlus;
}
