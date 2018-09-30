import * as React from 'react';
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import { FieldProps } from 'formik';
import { Omit } from './types';

export interface CheckboxProps
  extends FieldProps,
    Omit<MuiCheckboxProps, 'form'> {}

export const fieldToCheckbox = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}: CheckboxProps) => ({
  disabled: isSubmitting || disabled,
  ...props,
  ...field,
  value: field.value ? 'checked' : '',
});

const Checkbox: React.ComponentType<CheckboxProps> = props => (
  <MuiCheckbox {...fieldToCheckbox(props)} />
);

Checkbox.displayName = 'FormikMaterialUICheckbox';

export default Checkbox;
