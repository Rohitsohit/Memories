import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar.js";
import Home from "./component/Home/Home";
import Auth from "./component/Auth/Auth";


const App = () => {

  
  return (
    <Container maxWidth="lg">
      <Router>
      <Navbar />
      <Routes>
      <Route path="/" exact element={<Home />} />
      </Routes>
      <Routes>
      <Route path="/auth" exact element={<Auth/>} />
      </Routes>
    </Router>
    </Container>
  );
};

export default App;
