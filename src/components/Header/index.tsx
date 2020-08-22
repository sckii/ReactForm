import React from 'react';

import { Container, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { HeaderContainer, Title } from './styles';

interface Props {
  buttonName: string;
  linkName: string;
  pageName: string;
}

const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer>  
      <Container>
          <Col xs={9} style={{ "display":"flex" }}> 
            <Title><h1>Listagem</h1></Title> 
          </Col>
      </Container>
    </HeaderContainer>
  );
}

export default Header