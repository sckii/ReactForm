import React from 'react'

import { Formik, FormikHelpers, Field, Form } from 'formik';

import { registerSchema } from '../../utils/yup'
import { Button, Row, Col } from 'react-bootstrap';

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
          age: '',
          schooling: '',
          skills: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={registerSchema}
        >
        <Form>
          <Row>  
            <Col>
              <Field 
                id="name" 
                name="name" 
                placeholder="Nome"
              />
            </Col>
            <Col>       
              <Field 
                id="lastName"
                name="lastName" 
                placeholder="Sobrenome"
              />
            </Col>
          </Row>
          <Row>  
            <Col>
              <Field
                id="age" 
                name="age" 
                placeholder="Idade"
              />
            </Col>
            <Col>       
              <Field
                id="schooling" 
                name="schooling" 
                placeholder="Escolaridade"    
              />
            </Col>
          </Row>
          <Row>  
            <Col>
              <Field
                style={{"margin": '0.2rem', "resize":"none", "height": "10rem", "width":"100%"}} 
                as="textarea" 
                id="skills"
                name="skills"
                placeholder="Habilidades"
                />
            </Col>
          </Row>
          <Row>
            <Col style={{"margin": '0.2rem'}}>
              <Button variant='dark' type='submit'> Enviar </Button>
            </Col>
          </Row>
        </Form>
      </Formik>
    </> 
  );
}

export default FormValidation