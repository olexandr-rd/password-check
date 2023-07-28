import { Component } from '@angular/core';
import { CheckService } from '../check.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
})
export class PasswordFormComponent {
  color = ['grey', 'grey', 'grey'];
  password = new FormControl();

  passwordForm = new FormGroup({
    password: this.password,
  });

  constructor(private checkService: CheckService) {}

  getColor(): void {
    this.color = this.checkService.getStrengthColors(this.password.value);
  }
}
