import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';

@NgModule({
  declarations: [ForbiddenValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [ForbiddenValidatorDirective]
})
export class SharedDirectivesModule { }
