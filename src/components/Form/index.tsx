import React, { useState } from 'react'

import { Formik, FormikHelpers, Field, Form } from 'formik';

import { registerSchema } from '../../utils/yup'
import { Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import {uuid} from 'uuidv4'
import { PageContainer } from './styles';

interface Values {
  name: string;
  lastName: string;
  age: string;
  schooling: string;
  skills: string
}

const FormValidation = () => {
  const [visible, setVisible] = useState(false)
  
  

  return (
    <PageContainer>
      { visible === true ? <Alert variant='success'> Registrado com sucesso </Alert> : <></>}
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
            const { name, lastName, age, schooling, skills} = values
            
            axios.post('http://localhost:4000/registros', {
              "id": uuid(),
              "name": name,
              "lastName": lastName,
              "age": age,
              "schooling": schooling,
              "skills": skills,
            }).then(res => {
              console.log(res)
            })
            setVisible(!visible)
            setSubmitting(false);
          }, 1000);
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
                required  
              />
            </Col>
            <Col>       
              <Field 
                id="lastName"
                name="lastName" 
                placeholder="Sobrenome"
                required  
              />
            </Col>
          </Row>
          <Row>  
            <Col>
              <Field
                required  
                id="age" 
                name="age" 
                placeholder="Idade"
              />
            </Col>
            <Col>       
              <Field
                required  
                id="schooling" 
                name="schooling" 
                placeholder="Escolaridade"    
              />
            </Col>
          </Row>
          <Row>  
            <Col>
              <Field
                required  
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
      
    </PageContainer> 
  );
}

export default FormValidation