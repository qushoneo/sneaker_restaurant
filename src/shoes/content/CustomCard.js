import { Button, Card, CardImg } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin: 0 0 15px 0;
  background-color:seashell;
    color:black;
    border:0px;
  &:hover {
    background-color:DarkSalmon;
    transition: 0.3s;
  }
  text-align:left;
`;
const StyledTitle = styled(Card.Title)`
  font-family: Arial, Helvetica, sans-serif;
  font-weight:bold;
  height: 50px;
`;

const StyledImage = styled(CardImg)`
  height: 300px; 
`;
const SubTitle = styled(Card.Subtitle)`
  
`;

const customCard = ({ title, sneakerImage, cost, sex, size }) => {
  return (
    <StyledCard>
      <img src={sneakerImage}/>
      <Card.Body>
        <StyledTitle>{title}</StyledTitle>
      </Card.Body>
      <Card.Footer >
        <SubTitle className="row" >
          <div className="col-12">{cost}</div>
          <div className="col-12">{sex}</div>
          <div className="col-12">{size}</div>
        </SubTitle>
      </Card.Footer>
    </StyledCard>
  );
};

export default customCard;
