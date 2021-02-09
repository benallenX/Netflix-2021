import './App.css';
import {Homescreen,Login} from './components'
import {Switch, Route} from 'react-router-dom'
function App() {
  const user = null
  return (
    <div className="app">
      { !user ? (
        <Login />
      ): (
      <Switch>
        <Route  exact path='/'>
          <Homescreen />
        </Route>
      </Switch>
      )}
    </div>
  );
}

export default App;
