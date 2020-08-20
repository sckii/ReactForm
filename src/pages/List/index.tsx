import React from 'react';
import Header from '../../components/Header';
import ListComponent from '../../components/ListComponent';
import { Table } from 'react-bootstrap';
import { ListContainer } from './styles';


function List() {
  return (
    <>
      <Header 
        linkName="/register" 
        buttonName="Registrar"
        pageName="Lista"
      />
      <ListContainer>
        <Table striped hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Age</th>
              <th>Escolaridade</th>
              <th>Habilidades</th>          
            </tr>
          </thead>
          <ListComponent
            id={1}
            name="Samuel"
            last="Rodigues"
            age={17}
            schooling="Ensino médio"
            skills="HTML, CSS, JS, TS, Reactjs"
          />
        </Table>
      </ListContainer>
    </>
  )
}

export default List