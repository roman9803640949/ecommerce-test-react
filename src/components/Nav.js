import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getUser } from "../utils/auth-utils";
const Nav = () => {
  const user = getUser();
  console.log("user===", user);
  return (
    <div>
      <LinkContainer>
        <NavLink>
          <Link to="/">Products </Link>
        </NavLink>
        <NavLink>
          <Link to="/add">Add Product </Link>
        </NavLink>
        <NavLink>
          <Link to="/update">Update Products </Link>
        </NavLink>
        {user ? (
          <NavLink>
            <Link to="/logout">Logout </Link>
          </NavLink>
        ) : (
          <NavLink>
            <Link to="/signup">Sign Up </Link>
          </NavLink>
        )}

        <NavLink>
          <Link to="/profile">Profile </Link>
        </NavLink>
      </LinkContainer>
    </div>
  );
};

export default Nav;

const NavLink = styled.li`
  display: inline-block;
  padding: 1rem 1rem;
  a {
    text-decoration: none;
    padding: 0.1rem;
    color: white;
  }
`;

const LinkContainer = styled.ul`
  background: cornflowerblue;
  margin: 0;
  padding: 0;
`;
