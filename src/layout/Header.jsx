import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Header() {
  const userContext = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to={"/"} className="text-white">
          GitView
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {userContext.user?.email || ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={isOpen}>
        <Nav className="ml-auto" navbar>
          {userContext.user ? (
            <NavItem>
              <NavLink
                className="text-white"
                onClick={() => {
                  userContext.setUser(null);
                  signOut(auth);
                }}
              >
                Log out
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/signin">
                  Sign in
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/signup">
                  Sign up
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
