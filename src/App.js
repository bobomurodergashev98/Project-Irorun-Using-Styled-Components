import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Card from './components/Card';
// import {css} from 'styled-components'
import Works from './components/Works';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
    <Container>
      <Navbar />   
      <Home />  
      <About />
      <Card />
    </Container>
    
    <Works />
    <Container>
      <Footer />
    </Container>
    </>
  );
}
export default App;

const Container = styled.div`
width: 100%;
background-color: purple;
padding: 0 70px;
box-sizing: border-box;
`

// const Container=styled.div`
//   background-color:yellow;
//   color:red;
//   width: 100vw;
//   height: 100vh;
//   h1{
//     margin: 0;
//     padding: 0;
//   }
// `

