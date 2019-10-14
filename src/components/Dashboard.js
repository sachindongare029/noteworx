import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="dashboard container">
        <form>
          <input type="text" />
          <Link to="/symptoms">Submit</Link>
        </form>
      </div>
    );
  }
}

export default Dashboard;