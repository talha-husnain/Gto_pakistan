import './App.css';
import Home from './Home';
import About from './About';
import Team from './Team';
import Publication from './Publication';
import Project from './Project.jsx';
import Jobs from './Jobs';
import Gal from './Gal';
import Contact from './Contact';
import Bod from './Bod';
import Success from './Success'
import Vision from './Vision';
import Mission from './Mission';
import Rule from './Rule';
import Right from './Right';
import Health from './Health';
import Diasaster from './Diasaster';
import Envirn from './Envirn';
import Women from './Women';
import Education from './Education';
import News from './News.jsx';
import Team1 from './Team1';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';





function App() {
  return (
    <div className="Ap">

<Router>
  <Routes>
  <Route exact path='/' element = {<Home />}></Route>
  <Route exact path='/About' element={< About />}></Route>
  <Route exact path='/Team' element={< Bod />}></Route>
  <Route exact path='/Publication' element={< Publication />}></Route>
  <Route exact path='/Project' element={< Project />}></Route>
  <Route exact path='/Jobs' element={< Jobs />}></Route>
  <Route exact path='/Gal' element={< Gal />}></Route>
  <Route exact path='/Contact' element={< Contact />}></Route>
  <Route exact path='/Bod' element={< Bod />}></Route>
  <Route exact path='/Success' element={< Success />}></Route>
  <Route exact path='/Vision' element={< Vision />}></Route>
  <Route exact path='/Mission' element={< Mission />}></Route>
  <Route exact path='/Women' element={< Women />}></Route>
  <Route exact path='/Education' element={< Education />}></Route>
  <Route exact path='/Envirn' element={< Envirn />}></Route>
  <Route exact path='/Diasaster' element={< Diasaster />}></Route>
  <Route exact path='/Health' element={< Health />}></Route>
  <Route exact path='/Rule' element={< Rule />}></Route>
  <Route exact path='/Right' element={< Right />}></Route>
  <Route exact path='/News' element={< News />}></Route>
  <Route exact path='/Team1' element={< Team1 />}></Route>

  <Route exact path='/Home' element={< Home />}></Route>
 

  </Routes>
</Router>

     
     
      
        
      
      
    </div>
  );
}

export default App;
