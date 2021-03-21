import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideActionBarDirective } from './hide-action-bar.directive';

@NgModule({
  declarations: [
    HideActionBarDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HideActionBarDirective
  ]
})
export class HideActionBarModule { }
