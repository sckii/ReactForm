import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ListComponent from '../../components/ListComponent';
import { Table, Spinner, Row, Col, Container, Button } from 'react-bootstrap';
import { ListContainer, AlignCenter } from './styles';

import {registros} from '../../data/db.json'

import axios from 'axios'
import AddPerson from '../../components/Form';


function List() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])

  function openOrCloseWindow () {
    setOpen(!open)
  }

  useEffect(() => {
    axios.get('http://localhost:4000/registros')
      .then(res => {
        const dataBase = res.data
        console.log(dataBase)
        return setData(dataBase)
      })
  }, [])

  return (
    <>
      <Header 
        linkName="/register" 
        buttonName="Registrar"
        pageName="Lista"
      />
    <Col>
      <AlignCenter>
        <Button onClick={openOrCloseWindow} variant="dark" >Cadastrar</Button>
        <br/>
        { open === false ? <></> : <AddPerson />}
      { data.length !== 0 ? 
        <ListContainer>
          <Table striped hover bordered variant="light">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Idade</th>
                <th>Escolaridade</th>
                <th>Habilidades</th>          
              </tr>
            </thead>
            {registros.map((data: any) => {
              return (
                <ListComponent
                  key={data.id}
                  name={data.name}
                  last={data.lastName}
                  age={data.age}
                  schooling={data.schooling}
                  skills={data.skills.length}
                />
              )
            })}
              
              </Table>
        </ListContainer>
        : <ListContainer><h3> Nenhum item cadastrado </h3></ListContainer>
      }
      </AlignCenter>
      
    </Col>
    </>
  )
}

export default List