import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-status',
  templateUrl: './password-status.component.html',
  styleUrls: ['./password-status.component.css']
})
export class PasswordStatusComponent {
  @Input() color = [''];
}
