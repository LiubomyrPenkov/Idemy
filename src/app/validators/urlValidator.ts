import { AbstractControl, ValidationErrors } from '@angular/forms';

export const customUrlValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;

  const urlPattern = /^(https?):\/\/[^\s/$.?#].[^\s]*$/i;
  const isValid = urlPattern.test(value) || '';

  return !isValid ? { invalidUrl: true } : null;
};
