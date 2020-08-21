import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ListComponent from '../../components/ListComponent';
import { Table, Spinner } from 'react-bootstrap';
import { ListContainer } from './styles';

import {registros} from '../../data/db.json'

import axios from 'axios'


function List() {

  const [data, setData] = useState([])

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
      { data.length !== 0 ? 
        <ListContainer>
          <Table style={{"font-size":"0.8rem"}} striped hover bordered variant="light">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Idade</th>
                <th>Escolaridade</th>
                <th>Habilidades</th>          
              </tr>
            </thead>
            { registros.map((data: any) => {
              return (
                <ListComponent
                  key={data.id}
                  name={data.name}
                  last={data.lastName}
                  age={data.age}
                  schooling={data.schooling}
                  skills={data.skills}
                />
              )
            })}
              
              </Table>
        </ListContainer>
        : <ListContainer><h3> Nenhum item cadastrado </h3> <Spinner animation="border" /></ListContainer>
      }
    </>
  )
}

export default List