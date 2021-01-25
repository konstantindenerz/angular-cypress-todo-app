import {Component, Input} from '@angular/core';

@Component({
  selector: 'labs-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
})
export class ButtonComponent {
  /**
   * The text that should describe the button.
   */
  @Input() label: string;
}
