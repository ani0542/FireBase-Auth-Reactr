



import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
<Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
             <Route exact path='/'component={Dashboard} />
             <Route exact path='/project/:id' component={ProjectDetails}/>
             <Route path='/signin' component={SignIn} />
             <Route path='/signup' component={SignUp} />
             <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
 </Provider>

    );
  }
}

export default App;