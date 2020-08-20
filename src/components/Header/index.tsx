import React from 'react';

import { Container, Col, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { HeaderContainer, Title } from './styles';

interface Props {
  buttonName: string;
  linkName: string;
  pageName: string;
}

const Header: React.FC<Props> = ({ linkName, buttonName, pageName }) => {
  return (
    <HeaderContainer>  
      <Container >
        <Row>
          <Col xs={10} > 
          <Title><h1>{ pageName }</h1></Title> 
          </Col>
          <Col> 
            <Link to={ linkName } >
              <Button variant="dark"> {buttonName} </Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </HeaderContainer>
  );
}

export default Header