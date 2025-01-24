import Container from "./components/Container/Container";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <Container>
      <Nav/>
      <Home/>
      <About/>
      <Footer/>
    </Container>
  );
}

export default App;
