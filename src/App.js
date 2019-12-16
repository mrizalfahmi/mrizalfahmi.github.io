import React, { Component } from 'react';
//import logo from './logo.svg';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css';

function Home() {
  return <h2> Halaman Home </h2>
}

function ListView() {
  return (
    <React.Fragment>
      <h2> Semua User </h2>
      <ul>
        <Link to='/users/rizal'>Rizal</Link><br />
        <Link to='/users/kojel'>Kojel</Link>
      </ul>
    </React.Fragment>
  )
}

function DetailView({ match }) {
  return (
      <React.Fragment>
        <h2> Ini Halaman {match.params.name} </h2>
        <Link to='/users'>Kembali ke halaman user</Link>
      </React.Fragment>
    )
}

function noMatch() {
  return <h2> 404, Halaman tidak ditemukan</h2>
}

class App extends Component {

  render () {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/users'> User </Link> </li>
          </nav>

          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/users' exact component={ListView} />
              <Route path='/users/:name' exact component={DetailView} />
              <Route path='/users' component={noMatch} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
