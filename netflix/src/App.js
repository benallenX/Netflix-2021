import './App.css';
import {Homescreen,Login} from './components'
import {Switch, Route, Router} from 'react-router-dom'
import { useEffect } from 'react';
import {auth} from './components/fire'
import  {useDispatch, useSelector} from 'react-redux'
import {logout,login,selectUser} from './features/userSlice'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //Logged In
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        //Logged Out
        dispatch(logout)
      }
    })
    return unsubscribe
  }, [])

  return (
    <div className="app">
      <Router>
      { !user ? (
        <Login />
      ): (
      <Switch>
        <Route  exact path='/'>
          <Homescreen />
        </Route>
      </Switch>
      )}
      </Router>
    </div>
  );
}

export default App;