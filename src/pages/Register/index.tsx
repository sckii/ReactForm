import React from 'react';
import Header from '../../components/Header';
import FormValidation from '../../components/Form';
import { FormContainer } from './styles';

function Register() {
  return (
    <>
      <Header 
        linkName="/" 
        buttonName="Lista"
        pageName="Registrar"
      />
      <FormContainer>
        <FormValidation />
      </FormContainer>
    </>
  )
}

export default Register