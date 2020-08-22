import React, { useState } from 'react'

import { Formik, FormikHelpers, Field, Form } from 'formik';

import { registerSchema } from '../../utils/yup'
import { Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import {uuid} from 'uuidv4'
import { PageContainer } from './styles';
import { useHistory } from 'react-router-dom';

interface Values {
  name: string;
  lastName: string;
  age: string;
  schooling: string;
  skills: string
}

const FormValidation = () => {
  const [visible, setVisible] = useState(false)
  const [skillBox, setSkillBox] = useState([
    { skills: '' }
  ])
  
  let history = useHistory()
  
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
            setVisible(!visible);
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
            setSubmitting(false);
          }, 2000);
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
          <Button variant="link" type="button"> + Habilidade </Button>  
            <Row>  
              <Col>
                <Field
                  required  
                  as="input" 
                  id="skills"
                  name="skills"
                  placeholder="Habilidade"
                />
              </Col>
            </Row>    
          <Row>
            <Col style={{"margin": '1.8rem'}}>
              <Button variant='outline-dark' type='submit'> Enviar </Button>
            </Col>
          </Row>
        </Form>
      </Formik>
      
    </PageContainer> 
  );
}

export default FormValidation