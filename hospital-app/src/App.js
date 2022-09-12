

import    React from "react"
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';

import NavBar from './components/NavBar';
import AppointmentDetail from './components/Appointment'
import Appointments from './components/Appointments';
import About from './components/About'


function App() {
  return (
    <div  className='App'>
      <NavBar/ >
      <Switch>

    <Route  path="/appointments">
    <Appointments/>
    </Route>

    <Route  path="/appointments/:id">
    <AppointmentDetail/>
    </Route>

    <Route  path='/about'>
    <About/>
    </Route>

 
    <Route  exact path='/'>
    <Home/>
      </Route >
  
      <Route path='*'>
      <h1>404 not found</h1>
      </Route>



      </Switch>
      
    
 
    </div>
  );
}

export default App;
