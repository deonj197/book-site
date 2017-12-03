import React, { Component } from 'react';
import Routes from '../Routes'
import { NavLink } from 'react-router-dom';

import '../../styles/Header.css'


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="titleWrapper">
          <h1 className="title">Niviira</h1>
        </div>
        <div className="navWrapper">
          <ul className="navBar">
            <li>
                <NavLink exact className="Link" activeClassName="LinkActive" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="Link" activeClassName="LinkActive" to="/books">Books</NavLink>
            </li>
            <li>
                <NavLink className="Link" activeClassName="LinkActive" to="/merchandise">Merchandise</NavLink>
            </li>
            <li>
              <NavLink className="Link" activeClassName="LinkActive" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export { Header };
