import React from 'react';
import Button from '@material-ui/core/Button';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Formik, Field, Form, FieldProps } from 'formik';
import { action } from '@storybook/addon-actions';

import Wrapper from './Wrapper';
import FormValues from './FormValues';

import {
  Switch,
  Checkbox,
  fieldToCheckbox,
  CheckboxWithLabel,
} from '../src/main';

export default () => (
  <Wrapper title="Selectors">
    <Formik
      initialValues={{ switch: false, checkbox: false }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
      render={({ submitForm, values }) => (
        <Form>
          <Field name="switch" component={Switch} />
          <br />
          <Field name="checkbox" component={Checkbox} />
          <br />
          <Field
            name="checkboxWithLabel"
            Label={{ label: 'Checkbox With Label' }}
            component={CheckboxWithLabel}
          />
          <br />
          <Field
            name="custom"
            render={(props: FieldProps) => (
              <FormControlLabel
                // Silly example: make it so that this checkbox can never be disabled
                control={
                  <MuiCheckbox {...fieldToCheckbox(props)} disabled={false} />
                }
                label="Custom Checkbox"
              />
            )}
          />
          <br />
          <Button variant="raised" color="primary" onClick={submitForm}>
            Submit
          </Button>
          <br />
          <FormValues values={values} />
        </Form>
      )}
    />
  </Wrapper>
);
