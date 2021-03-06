/* eslint-disable react/no-multi-comp, react/prefer-stateless-function, react/prop-types */

import React, { Component } from 'react';

import { asField, Submit } from '@flow-form/field';
import Form from '@flow-form/form/dist/Form';

/* eslint-disable no-console */
const onSubmit = values => console.log(values);
/* eslint-enable no-console */

const toWrap = ({ name, onChange, value, placeholder }) => (
  <input name={name} onChange={onChange} value={value} placeholder={placeholder} />
);

class toWrapClass extends Component {
  render() {
    return <input {...this.props} />;
  }
}

const Wrapped = asField(toWrap);
const WrappedClass = asField(toWrapClass);

export default class asFieldHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aWrappedFormInput: '',
      aWrappedFormInput2: '',
    };

    this.change1 = this.onChange.bind(this, 'aWrappedFormInput');
    this.change2 = this.onChange.bind(this, 'aWrappedFormInput2');
  }

  onChange(name, value) {
    this.setState(prevState => Object.assign({}, prevState, { [name]: value }));
  }

  render() {
    return (
      <Form name="test" onSubmit={onSubmit}>
        <p>
          Stateless Input Component Wrapped with HOC:{' '}
          <Wrapped name="aWrappedFormInput" onChange={this.change1} placeholder="test" />
        </p>
        <p>
          ES6 Class Based Input Component Wrapped with HOC:{' '}
          <WrappedClass name="aWrappedFormInput2" onChange={this.change2} placeholder="test" />
        </p>
        <h4>Values</h4>
        {Object.keys(this.state).map(key => <pre key={key}>{`${key}: ${this.state[key]}`}</pre>)}
        <p>
          <Submit />
        </p>
      </Form>
    );
  }
}
