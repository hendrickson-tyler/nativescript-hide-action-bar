import { Directive } from '@angular/core';
import { Page } from '@nativescript/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[hideActionBar]'
})
export class HideActionBarDirective {

  /**
   * Hides the `ActionBar` for the page when the directive is loaded.
   * @param page The NativeScript `Page` reference for the current displayed component.
   */
  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }
}
