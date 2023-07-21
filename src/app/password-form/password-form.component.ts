import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent {
  color = ['grey', "grey", "grey"];
  @Input() password = '';

  isEasy = (str: string): boolean => /^[a-z]+$/i.test(str) || /^[0-9]+$/.test(str) ||
    /^[!@#$%^&*(),.?":{}|<>\\\/]+$/.test(str);
  isMedium = (str: string): boolean =>
    /^[a-z0-9]+$/i.test(str) || /^[0-9!@#$%^&*(),.?":{}|<>\\\/]+$/.test(str) ||
    /^[!@#$%^&*(),.?":{}|<>\\\/a-z]+$/i.test(str);
  isStrong = (str: string): boolean => /^[a-z0-9!@#$%^&*(),.?":{}|<>\\\/]+$/i.test(str);


  checkStrength(): void {
    if (this.password.length < 8) this.color = ['red', 'red', 'red'];
    else if (this.isEasy(this.password)) this.color = ['green', 'red', 'red'];
    else if (this.isMedium(this.password)) this.color = ['green', 'green', 'red'];
    else if (this.isStrong(this.password)) this.color = ['green', 'green', 'green'];
  }
}
