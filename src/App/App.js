
import Home from '../components/Home/Home';
import LightBoxContainer from '../components/Gallery/LightBox/LightBoxContainer';

import { Switch,Route ,Redirect } from 'react-router-dom';
import { ROUTES } from "../constants/routes";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact path={ROUTES.HOME} component={Home} />
       <Route exact path={ROUTES.GALLERY} component={LightBoxContainer} />
        <Route
               exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/home" /> 
                    )
                }}
              />
        </Switch>
    </div>
  );
}

export default App;
