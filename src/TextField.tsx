import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import { FieldProps } from 'formik';

export interface TextFieldProps extends FieldProps, MuiTextFieldProps {}

export const fieldToTextField = ({
  field,
  form,
  disabled = false,
  ...props
}: TextFieldProps) => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;

  return {
    ...props,
    ...field,
    error: touched[name] && !!errors[name],
    helperText: touched[name] && errors[name] ? errors[name] : props.helperText,
    disabled: isSubmitting || disabled,
  };
};

const TextField: React.ComponentType<TextFieldProps> = props => (
  <MuiTextField {...fieldToTextField(props)} />
);

TextField.displayName = 'FormikMaterialUITextField';

export default TextField;
