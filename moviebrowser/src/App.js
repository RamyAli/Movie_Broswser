
import './App.css';
import NaveBar from './components/Navbar'
import Home from './components/Home'
import AboutView from './components/AboutView'
import { Route, Router } from 'react-router-dom';


function App() {
  return (
    <div >
        <NaveBar /> 
      <switch>
        <Router path="/" exact>
          <Home/>
        </Router>
         <Router path="/about" component={AboutView}/>
      

      </switch>
    </div>
  );
}


export default App;
