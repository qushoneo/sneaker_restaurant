import NavbarList from "./NavbarList";

import styled from "styled-components";

const Styledheader = styled.header`
  margin-bottom: 20px;
  padding: 0px;
  background-color: #edeeee;
  text-align: center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = () => {
  return (
    <Styledheader>
      <NavbarList />
    </Styledheader>
  );
};

export default Header;
