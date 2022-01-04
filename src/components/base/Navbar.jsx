import routes from '../../routes';
import { Link } from 'react-router-dom';
import React from 'react';

function Nav(props) {
  return (
    <nav className="d-flex flex-row bg-dark navbar-dark">
      {/* <a class="navbar-brand">Navbar</a> */}
      {routes
        .filter((item) => item.isNav)
        .map((item, index) => (
          <div className="navbar-nav d-flex flex-row bd-highlight mb-3">
            <Link className="navbar-brand " to={item.path}>
              {item.title}{' '}
            </Link>
          </div>
        ))}
    </nav>
  );
}

export default Nav;
