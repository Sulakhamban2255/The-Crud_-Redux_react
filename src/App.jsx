import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import DisplayUser from "./Pages/DisplayUser";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import AddUser from "./Pages/AddUser1";

function App() {
  return (
    <>
      <Header />
      <Container className="justify-content-center">
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/display" element={<DisplayUser />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
