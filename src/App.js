import React, { Component } from 'react';
import './App.scss';
import Dashboard from './components/Dashboard';
import Welcome from './components/Welcome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  }
  render() {
    let {loading} = this.state;
    return <div className="App">{loading ? <Welcome /> : <Dashboard />}</div>;
  }
}

export default App;
