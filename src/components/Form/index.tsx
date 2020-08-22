import React, { useState } from 'react'

import { useFormik, useFormikContext } from 'formik'

import { registerSchema } from '../../utils/yup'
import { Button, Col, Form, Alert } from 'react-bootstrap';
import { PageContainer } from './styles';
import axios from 'axios';

import {uuid} from 'uuidv4'

const SubmitToken = () => {
  

  const { values, submitForm } = useFormikContext()
  React.useEffect(() => {
    submitForm()
  }, [values, submitForm])

  return null
}

const AddPerson = () => {
  const [addSkill, setAddSkill] = useState([{
    skills: [{}]
  }])

  const [createdWindow, setCreatedWindow] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      age: '',
      schooling: '',
      skills: '',
    },
    validationSchema:
      registerSchema,

    onSubmit: values => {
    
      setCreatedWindow(!createdWindow)
      setTimeout(() => {
      axios.post('http://localhost:4000/registros', {
        "id": uuid(),
        values
      }).then(res => {
        console.log(res)
      })
      
      }, 1000)
    }
  })
  return (
    <PageContainer>
    { createdWindow === false ? <></> : <Alert variant="success"> Cadastrado </Alert>}
    <Form onSubmit={formik.handleSubmit}>
      <Form.Row>
        <Col>
          <Form.Control 
            required
            placeholder="Nome" 
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Col>
        <Col>
          <Form.Control 
            required
            placeholder="Sobrenome" 
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control 
            required
            placeholder="Idade" 
            id="age"
            name="age"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
        </Col>
        <Col>
          <Form.Control 
            required
            placeholder="Escolaridade" 
            id="schooling"
            name="schooling"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.schooling}
          />
        </Col>
      </Form.Row>


          <Button variant="link"> + Habilidade </Button>
          <Form.Control 
            required
            placeholder="habilidades" 
            id="skills"
            name="skills"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.skills}
          />
       

      <Button type="submit">Registrar</Button>
    </Form>
    
    </PageContainer>
  )
}


export default AddPerson