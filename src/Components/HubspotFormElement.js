import React, { Component } from 'react';
import HubspotForm from 'react-hubspot-form';

class HubspotFormElement extends Component {
  render() {
    const form = this.props.form;
    const value = form && form.value && JSON.parse(form.value);

    if (!value) {
      return null;
    }

    return (
      <>
        <h2>{value.name}</h2>
        <HubspotForm portalId={value.portalId} formId={value.id} />
      </>
    );
  }
}

export default HubspotFormElement;
