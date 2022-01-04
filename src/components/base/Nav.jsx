import routes from '../../routes';
import { Link } from 'react-router-dom';
import React from 'react';

function Nav(props) {
  return (
    <div className="row ">
      //
      <ul>
        {routes
          .filter((item) => item.isNav)
          .map((item, index) => (
            <nav class="navbar navbar-dark bg-dark">
              <div key={index} className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item text-light">
                    <Link to={item.path}>{item.title} </Link>
                  </li>
                </ul>
              </div>
            </nav>
          ))}
      </ul>
      <hr />
    </div>
  );
}

export default Nav;
