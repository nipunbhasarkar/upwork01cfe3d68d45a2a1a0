import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  @Input() counterValue = 1;
  @Output() counterEvent = new EventEmitter();

  public minus = faMinus;
  public plus = faPlus;

  public increment() {
    this.counterValue++;
    this.triggerAction();
  }
  public decrement() {
    if (this.counterValue > 1) {
      this.counterValue--;
      this.triggerAction();
    }
  }
  private triggerAction() {
    this.counterEvent.emit(this.counterValue);
  }
}
