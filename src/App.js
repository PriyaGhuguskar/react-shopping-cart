import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import Navcompo from './Compo/Navcompo';
import Productcompo from './Compo/Productcompo';
import Cartcompo from './Compo/Cartcompo';


function App() {
  return (
    
    <BrowserRouter>
    <Navcompo />
    <Switch>
      <Route exact path="/">
      <Productcompo />
      </Route>
      <Route path="/cartPage">
      <Cartcompo />
      </Route>
    </Switch>
    

    </BrowserRouter>
  
  );
}

export default App;
