import React from 'react';

import { Container, Col, Table} from 'react-bootstrap'

interface Props {
  id: number;
  name: string;
  last: string;
  age: number;
  schooling: string;
  skills: string
}

const ListComponent: React.FC<Props> = ({ id, name, last, age, schooling, skills }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{ id }</td>
          <td>{ name }</td>
          <td>{ last }</td>
          <td>{ age }</td>
          <td>{ schooling }</td>
          <td>{ skills }</td>
        </tr>
      </tbody>
    </>
  );
}

export default ListComponent