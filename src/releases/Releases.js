import { CardImg, CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Header from "../navbar/Header";
import rel1 from "../assets/releases/release1.jpg"

const StyledCarousel = styled(Carousel)`
  width:100%;
  background-color:red;
  height:500px;
`
const ItemRel = ({ src }) => {
  return ( 
      <img src={rel1}></img>
  );
};

const Releases = () => {
  return (
    <div className="row">
      <div className="col-12">
      <Header style={{width:'100%'}}/>
      </div>
      <Carousel className="col">
      <CarouselItem><ItemRel src={rel1}></ItemRel></CarouselItem>
      </Carousel>
    </div>
  );
};

export default Releases;
