import Container from "./components/Container/Container";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { Routes, Route } from 'react-router-dom';
import Create from "./components/Create/Create";

function App() {
  return (
    <Container>
      <Nav/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
