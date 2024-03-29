import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";

import { routes } from "../../route/routes";
import MenuNavbar from "../navbar/Navbar";
import { Container } from "react-bootstrap";
import VideoDetails from "../gallery/VideoDetails";

const App: FC = () => {
  return (
    <BrowserRouter>
      <MenuNavbar />
      <Container>
        <Routes>
          {routes.map(({ path, Component }, index) => {
            return <Route path={path} element={<Component />} key={index} />;
          })}

          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<VideoDetails />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
