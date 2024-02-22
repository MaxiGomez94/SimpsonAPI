import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../src/assets/logosimpson.png';
import Frases from './components/Frases';

const App=()=> {


  return (
    <>
    <Container className=" text-center my-4">
      <img src={logo} alt="logo de los simpson" className='img-fluid' />
      <Frases></Frases>
    </Container>
    
    </>
  )
}

export default App
