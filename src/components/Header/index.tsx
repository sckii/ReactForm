import React from 'react';

import { Container, Col, Button } from 'react-bootstrap'
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
      <Container>
        
          <Col xs={9} style={{ "display":"flex" }}> 
            <Title><h1>{ pageName }</h1></Title> 
          </Col>
          <Col style={{ "display":"flex" }}> 
            <Link to={ linkName } >
              <Button variant="dark"> {buttonName} </Button>
            </Link> 
          </Col>

      </Container>
    </HeaderContainer>
  );
}

export default Header