import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import About from './components/About';
import Heading from './components/Heading';
function App() {
  return (
    <>
    <Heading/>
    <Navbar title="TextEditor" about="About"/>
    <Button/>
    <About/>
    </>
  );
}

export default App;
