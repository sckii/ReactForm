import React from 'react'

import { useFormik } from 'formik'

import { registerSchema } from '../../utils/yup'
import { Button, Col, Form } from 'react-bootstrap';
import { PageContainer } from './styles';

const AddPerson = () => {
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
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <PageContainer>
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