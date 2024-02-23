import { Container, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../src/assets/logosimpson.png";
import Frases from "./components/Frases";
import { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [personaje, setPersonaje] = useState({});
  const [mostrarFrase, setMostrarFrase] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setMostrarFrase(false);
    try {
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      console.log(respuesta);
      console.log(dato);
      setPersonaje(dato[0]);
      setMostrarFrase(true);
    } catch (error) {
      console.log(error);
    }
  };
  const mostrarComponentes = mostrarFrase ? (
    <Frases personaje={personaje}></Frases>
  ) : (
    <div>
      <Spinner animation="border" variant="black"></Spinner>
    </div>
  );

  return (
    <>
      <Container className=" text-center my-4">
        <img src={logo} alt="logo de los simpson" className="img-fluid" />
        {mostrarComponentes}
        <Button variant="primary" className="mt-3" onClick={consultarAPI}>
          Cambiar Frase
        </Button>
      </Container>
    </>
  );
};

export default App;
