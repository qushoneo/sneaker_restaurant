import styled from "styled-components";
import Header from "../navbar/Header";
import ContentContainer from "./content/ContentContainer";


const shoes = () => {
  return (
    <styledPage className="row">
      <div className="col-12">
      <Header style={{width:'100%'}}/>
      </div>
      <div className="col-lg-12 ">
        <ContentContainer />
      </div>
    </styledPage>
  );
};

export default shoes;
