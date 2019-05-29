import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import { createChallangeName } from '../components/actions/actions';

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
class CreateChallangeForm extends React.Component {
  handleError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="error">
          <div>{error}</div>
        </div>
      );
    }
  };
  handleChange = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {/* {touched && (error && <span>{error}</span>)} */}
        <div>{this.handleError(meta)}</div>
        <br />
      </div>
    );
  };
  passValuesToTheStore = values => {
    this.props.onSubmit(values);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.passValuesToTheStore)}>
        <Field
          name="title"
          component={this.handleChange}
          label="Enter Challange"
        />
        <Field
          name="description"
          component={this.handleChange}
          label="Enter Daily Amount"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'createForm',
  validate,
  destroyOnUnmount: false
})(CreateChallangeForm);
