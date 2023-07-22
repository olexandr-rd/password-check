import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent {
  color = ['grey', 'grey', 'grey'];
  @Input() password = '';

  static readonly easyPassword = /^[a-z]+|\d+|[\p{P}\p{S}]+$/ui;
  static readonly mediumPassword = // Sorry for this being a bit too long :(
/^(?=.*\d)(?=.*[a-z])[a-z\d]|(?=.*[a-z])(?=.*[\p{P}\p{S}])[a-z\p{P}\p{S}]|(?=.*\d)(?=.*[\p{P}\p{S}])[\d\p{P}\p{S}]+$/ui;
  static readonly strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[\p{P}\p{S}])[\w\p{P}\p{S}]+$/ui;

  checkStrength(): void {
    if (this.password.length > 0 && this.password.length < 8) this.color.fill('red');
    else if (PasswordFormComponent.strongPassword.test(this.password)) this.color.fill('green');
    else if (PasswordFormComponent.mediumPassword.test(this.password)) this.color = ['green', 'green', 'red'];
    else if (PasswordFormComponent.easyPassword.test(this.password)) this.color = ['green', 'red', 'red'];
    else this.color.fill('grey');
  }
}
