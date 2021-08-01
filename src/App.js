import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Service from './Pages/Service';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div>
      <Router>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/services">
      <Service/>
      </Route>
      <Route path="/portfolio">
      <Portfolio/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
