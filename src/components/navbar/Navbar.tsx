import React, { FC } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { routes } from "../../route/routes";

const MenuNavbar: FC = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          {routes.map(({ path, name }, index) => (
            <Nav.Link href={path} key={index}>
              {name}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MenuNavbar;
