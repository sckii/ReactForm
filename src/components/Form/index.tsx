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
  const [skillNumber, setSkillNumber] = useState(1)
  const [addSkill, setAddSkill] = useState([{}])

  function addOne() {
    setAddSkill([
      ...addSkill,
      {}
    ])
    setSkillNumber(skillNumber + 1)
    console.log(skillNumber)

  }

  const [createdWindow, setCreatedWindow] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      age: '',
      schooling: '',
    },
    validationSchema:
      registerSchema,

    onSubmit: values => {
      console.log(skillNumber)
      setCreatedWindow(!createdWindow)
      setTimeout(() => {
      axios.post('http://localhost:4000/registros', {
        "id": uuid(),
        values,
        skills: skillNumber
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

          <Button onClick={addOne} variant="link"> + Habilidade </Button>
          { addSkill.map((skill, index) => {
            return (
              <Form.Control 
                required
                key={index}
                placeholder="habilidades" 
                id="skills"
                name="skills"
                type="text"
              />)
          })}
       

      <Button type="submit">Registrar</Button>
    </Form>
    
    </PageContainer>
  )
}


export default AddPerson