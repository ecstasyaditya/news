import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-none navcol">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><strong>GLA NEWS</strong></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/sport">Sports</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.props.searchQuery} // Use props instead of state
                onChange={this.props.handleSearch} // Use props instead of state
              />
              <button className="btn btn-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;