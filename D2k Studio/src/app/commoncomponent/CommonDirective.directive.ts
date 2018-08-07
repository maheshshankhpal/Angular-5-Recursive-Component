import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCommonDirective]',
  host: {
    '(input)': 'toUpperCase($event.target.value)',

 }
})
export class CommonDirectiveDirective {

  constructor(public el: ElementRef) {
  }
  @Input() onlyNumber: boolean;
  @Input() onlyAlphabet: boolean;
  @Input('appCommonDirective') allowUpperCase: boolean;
  @HostListener('keydown', ['$event'])
  onkeydown(event) {
    let e = <KeyboardEvent>event;
    if (this.onlyNumber) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    }
    if (this.onlyAlphabet) {
      var charCode = (e.charCode) ? e.charCode : ((e.keyCode) ? e.keyCode :
      ((e.which) ? e.which : 0));
      if (charCode > 31 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122)) {
      return false;
      }
   return true;
    }

  }
  toUpperCase(value: any) {
    if (this.allowUpperCase)
    this.el.nativeElement.value = value.toUpperCase();
}

}
