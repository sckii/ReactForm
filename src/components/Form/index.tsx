import React from 'react'

import { Formik, Field, Form, FormikHelpers } from 'formik';

import { registerSchema } from '../../utils/yup'

interface Values {
  name: string;
  lastName: string;
  age: number;
  schooling: string;
  skills: string
}

const FormValidation = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          age: 0,
          schooling: '',
          skills: '',
        }}

        validationSchema={ registerSchema }
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="firstName">Nome</label>
          <Field id="name" name="name" placeholder="John" />

          <label htmlFor="lastName">Sobrenome</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="lastName">Idade</label>
          <Field id="age" name="age" placeholder="Doe" />

          <label htmlFor="lastName">Escolaridade</label>
          <Field id="schooling" name="schooling" placeholder="Doe" />

          <label htmlFor="lastName">Habilidades</label>
          <Field id="skills" name="skills" placeholder="Doe" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </> 
  );
}

export default FormValidation