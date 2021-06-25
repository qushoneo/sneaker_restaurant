import sneakers from "./SneakerList";
import styled from "styled-components";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import {
  Button,
  Form,
  FormControl as FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
} from "react-bootstrap";
import { useState } from "react";
import ShoeObj from "./ShoeObject";

const Container = styled.div`
  margin-right: 10px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin: 5px;
  text-align: center;
`;

const ButtonColor = styled.button`
padding-top:20px;
background-color:${props => props.value};
border:0px;
`

const StyledForm = styled(Form.Control)`
  text-align: left;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const Inputs = styled.div`
  padding: 30px;
  background-color: #edeeee;
  margin: 0 30px 30px;
  height: 30%;
`;

const Item = styled.div`
  margin-bottom: 20px;
`;

const Shoe = styled.div``;

const ContentContainer = () => {
  const [filterNameValue, setFilterValue] = useState("");
  const [filterSexValue, setfilterSexValue] = useState("");
  const [filterCostValue, setFilterCostValue] = useState(0);
  const [filterSizeValue, setFilterSizeValue] = useState(0);
  const [filterColorValue, setFilterColorValue] = useState("");
  let sneakersContainer = [];
  sneakers.forEach((sneaker) => {
    sneakersContainer.push(
      ShoeObj(
        sneaker.name,
        sneaker.sex,
        sneaker.image,
        sneaker.cost,
        sneaker.size
      )
    );
  });

  const FilterSneakers = () => {
    let FilteredSneakers = sneakers;
    let ret = [];
    if (filterSexValue != "") {
      // filter sex
      FilteredSneakers = FilteredSneakers.filter((sneaker) =>
        sneaker.sex.includes(filterSexValue)
      );
    }
    if (filterNameValue != "") {
      FilteredSneakers = FilteredSneakers.filter(
        (sneaker) =>
          sneaker.name.toUpperCase().indexOf(filterNameValue.toUpperCase()) !=
          -1
      );
    }
    if (filterColorValue != "") {
      FilteredSneakers = FilteredSneakers.filter((sneaker) =>
        sneaker.color.includes(filterColorValue)
      );
    }
    if (filterSizeValue != "") {
      FilteredSneakers = FilteredSneakers.filter((sneaker) =>
        sneaker.size.includes(filterSizeValue)
      );
    }
    if (FilteredSneakers.length != 0) {
      FilteredSneakers.forEach((sneaker) => {
        ret.push(
          ShoeObj(
            sneaker.name,
            sneaker.sex,
            sneaker.image,
            sneaker.cost,
            sneaker.size
          )
        );
      });
    } else if (FilteredSneakers.length == 0) {
      ret = <h1>{"not found"}</h1>;
    } else {
      ret = sneakersContainer;
    }
    return <Shoe className="col-9 row">{ret}</Shoe>;
  };

  return (
    <Container className="row">
      <Inputs>
        <Item>
          <Form.Control
            placeholder="Enter the name of the model"
            text="Enter the name of the model"
            value={filterNameValue}
            onChange={(event) => {
              setFilterValue(event.target.value);
            }}
          />
        </Item>
        <Item>
          <Form.Control
            placeholder="Enter the name of the model"
            text="Enter the name of the model"
            value={filterCostValue}
            onChange={(event) => {
              setFilterCostValue(event.target.value);
            }}
          />
        </Item>
        <Item>
          <InputGroup.Prepend
            className="row col-12"
            style={{ display: "inline-block" }}
          >
            <StyledButton
              variant="secondary"
              value="male"
              onClick={(event) => {
                setfilterSexValue(event.target.value);
              }}
              className="col-lg-5"
            >
              Male
            </StyledButton>

            <StyledButton
              variant="secondary"
              value="female"
              onClick={(event) => {
                setfilterSexValue(event.target.value);
              }}
              className="col-lg-5"
            >
              Female
            </StyledButton>
          </InputGroup.Prepend>
        </Item>
        <Item>
          <RangeSlider
            value={filterSizeValue}
            min={23}
            max={48}
            step={1}
            variant={"secondary"}
            onChange={(event) => setFilterSizeValue(event.target.value)}
          />
        </Item>
        <Item>
        <Button
          variant="secondary"
          onClick={(event) => {
            setfilterSexValue("");
            setFilterValue("");
            setFilterSizeValue(0);
            setFilterCostValue(0);
          }}
        >
          Clear settings
        </Button>
        </Item>
        <Item className="row">
          <ButtonColor    
            className="col-4"   
            value={"white"}
            onClick={(event) => {
              setFilterColorValue(event.target.value);
            }}
          ></ButtonColor>
          <ButtonColor
          className="col-4" 
            value={"red"}
            onClick={(event) => {
              setFilterColorValue(event.target.value);
            }}
          ></ButtonColor>
          <ButtonColor
          className="col-4" 
            value={"black"}
            onClick={(event) => {
              setFilterColorValue(event.target.value);
            }}
          ></ButtonColor>
          <ButtonColor
          className="col-4" 
            value={"gray"}
            onClick={(event) => {
              setFilterColorValue(event.target.value);
            }}
            className="col-4" 
            value={"blue"}
            onClick={(event) => {
              setFilterColorValue(event.target.value);
            }}
          ></ButtonColor>
          <ButtonColor
          className="col-4" 
            value={"gray"}
            onClick={(event) => {
              setFilterColorValue(event.target.value);
            }}
            className="col-4" 
            value={"orange"}
            onClick={(event) => {
              setFilterColorValue(event.target.value);
            }}
          ></ButtonColor>
        </Item>
      </Inputs>
      {FilterSneakers()}
    </Container>
  );
};

export default ContentContainer;
