import Navbar from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import LogoImage from "react-bootstrap/Image";
import NavLink from "react-bootstrap/NavLink";
import logo from "../nike.png";
import styled from "styled-components";

const StyledLogo = styled(LogoImage)`
  max-width: 150px;
  margin-left: 30px;
  padding-top: 10px;
`;
const StyledNavLink = styled(NavLink)`
  text-align:center;
  font-size: 30px;
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  &:hover {
    transform: translateY(10%);
    transition-duration: 0.2s;
    color: white;
    background-color: black;
  }
`;

const NavbarList = () => {
  return (
    <Navbar className="row col-12">
      <div className="col-12 row">
      <NavbarBrand className="col-lg-2">
        <StyledLogo src={logo} />
      </NavbarBrand>
      <StyledNavLink href="/shoes" className="offset-lg-1 col-lg-2">Shoes</StyledNavLink>
      <StyledNavLink href="/releases"className="col-lg-2">New Releases</StyledNavLink>
      <StyledNavLink href="#"className="col-lg-2">Sale</StyledNavLink>
      <StyledNavLink href="#"className="col-lg-2">Store</StyledNavLink>
      </div>
    </Navbar>
  );
};

export default NavbarList;
