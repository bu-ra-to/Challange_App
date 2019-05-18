import React from 'react';
import { Field, reduxForm } from 'redux-form';

const showresults = values => {
  console.log(values);
};
let handleError = ({ touched, error }) => {
  if (touched && error) {
    return (
      <div className="error">
        <div>{error}</div>
      </div>
    );
  }
};
let handleChange = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} />
      {/* {touched && (error && <span>{error}</span>)} */}
      <div>{handleError(meta)}</div>
      <br />
    </div>
  );
};
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Enter your challange';
  }
  if (!formValues.description) {
    errors.description = 'Enter daily amount';
  }
  return errors;
};
let CreateChallangeForm = props => {
  return (
    <form onSubmit={props.handleSubmit(showresults)}>
      <Field name="title" component={handleChange} label="Enter Challange" />
      <Field
        name="description"
        component={handleChange}
        label="Enter Daily Amount"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'createForm',
  validate
})(CreateChallangeForm);
