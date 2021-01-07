import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CarDetails from './components/CarDetails/CarDetails';
import Register from './components/Register/Register';
import Login from './components/Login/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cars" exact component={CarDetails} />
          <Route path="/users" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;