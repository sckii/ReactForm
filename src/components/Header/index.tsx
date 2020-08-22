import React from 'react';

import { Container, Col} from 'react-bootstrap'
import { HeaderContainer, Title } from './styles';

interface Props {
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