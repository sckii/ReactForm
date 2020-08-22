import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ListComponent from '../../components/ListComponent';
import { Table, Col, Button } from 'react-bootstrap';
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
      <Header />
    <Col>
      <AlignCenter>
        { open === false ? <Button onClick={openOrCloseWindow} variant="dark" >Cadastrar usuário </Button> : <> </>}
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
                <th>Hab..</th>          
              </tr>
            </thead>
            {registros.map((data: any) => {
              return (
                <ListComponent
                  key={data.id}
                  name={data.values.name}
                  last={data.values.lastName}
                  age={data.values.age}
                  schooling={data.values.schooling}
                  skills={data.skills}
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