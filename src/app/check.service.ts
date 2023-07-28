import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  static readonly easyPassword = /^[a-z]+|\d+|[\p{P}\p{S}]+$/ui;
  static readonly mediumPassword = /^(?=.*\d)(?=.*[a-z])[a-z\d]|(?=.*[a-z])(?=.*[\p{P}\p{S}])[a-z\p{P}\p{S}]|(?=.*\d)(?=.*[\p{P}\p{S}])[\d\p{P}\p{S}]+$/ui;
  static readonly strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[\p{P}\p{S}])[\w\p{P}\p{S}]+$/ui;

  getStrengthColors(password: string): string[] {
    let color = ['', '', ''];

    if (!password) color.fill('grey');
    else if (password.length > 0 && password.length < 8) color.fill('red');
    else if (CheckService.strongPassword.test(password)) color.fill('green');
    else if (CheckService.mediumPassword.test(password)) color = ['green', 'green', 'red'];
    else if (CheckService.easyPassword.test(password)) color = ['green', 'red', 'red'];
    else color.fill('red');

    return color;
  }
}
