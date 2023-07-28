import {Component, EventEmitter, forwardRef, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Output() inputChange = new EventEmitter<string>();
  password = new FormControl('');

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.password.setValue(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
    this.password.valueChanges.subscribe(value => {
      fn(value);
      this.inputChange.emit(value!);
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
