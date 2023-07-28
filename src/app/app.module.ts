import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordStatusComponent } from './password-status/password-status.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CheckService } from "./check.service";

@NgModule({
  declarations: [
    AppComponent,
    PasswordFormComponent,
    PasswordInputComponent,
    PasswordStatusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
