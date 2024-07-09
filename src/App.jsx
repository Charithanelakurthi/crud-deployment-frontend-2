import { Route, Routes } from 'react-router-dom';
import { AddEvent } from './components/AddEvent';
import { EditEvent } from './components/EditEvent';
import { EventDetails } from './components/EventDetails';
import {Event} from './components/Event';


import { Navbar } from './components/NavBar';
import { Signin } from './components/signin';
import { Signup } from './components/signup';
import {Home} from './components/Home';



function App() {
  return (
    <div className="App">
      
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Event/>} />
      
        <Route path='/event' element={<Home />} />
        
        
       
        <Route path='/addevent' element={<AddEvent />} />
        <Route path=':_id/edit' element={<EditEvent />} />
        <Route path=':_id/detail' element={<EventDetails />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
      
    </div>
  );
}

export default App;