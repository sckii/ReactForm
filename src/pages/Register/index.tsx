import React from 'react';
import Header from '../../components/Header';
import FormValidation from '../../components/Form';

function Register() {
  return (
    <>
      <Header 
        linkName="/" 
        buttonName="Lista"
        pageName="Registrar"
      />
      <FormValidation />
    </>
  )
}

export default Register