import React, { useState } from 'react'

import { useFormik, useFormikContext } from 'formik'

import { registerSchema } from '../../utils/yup'
import { Button, Col, Form, Alert } from 'react-bootstrap';
import { PageContainer } from './styles';
import axios from 'axios';

import {uuid} from 'uuidv4'

const AddPerson = () => {
  const [skillNumber, setSkillNumber] = useState(1)
  const [addSkill, setAddSkill] = useState([{}])
  const [trueOf, setTrueOf] = useState(false)

  function trueOfCourse() {
    setTrueOf(!trueOf)
  }
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
      { trueOf && formik.errors.name && <Alert variant="danger"> {formik.errors.name} </Alert>}
      { trueOf && formik.errors.lastName && <Alert variant="danger"> {formik.errors.lastName} </Alert>}
      { trueOf && formik.errors.age && <Alert variant="danger"> {formik.errors.age} </Alert>}
      { trueOf && formik.errors.schooling && <Alert variant="danger"> {formik.errors.schooling} </Alert>}
      <Form.Row>
        <Col>
          <Form.Control 
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
       

      <Button onClick={trueOfCourse} type="submit" variant="outline-dark"> Cadastrar </Button>
      
    </Form>
    
    </PageContainer>
  )
}


export default AddPerson