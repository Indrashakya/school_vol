import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar justify-content-between p-4 display-6">
      <div className='display-5 text-whit'>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </div>
      <ul className="flex-row nav">
        <li className="nav-item active mx-2" >
          <a
            href="#reward"
            onClick={() => handlePageChange('Reward')}
            className={currentPage === 'Reward' ? 'nav-link active' : 'nav-link'}
          >
            Reward
          </a>
        </li>
        <li className="nav-item active mx-2">
          <a
            href="#support"
            onClick={() => handlePageChange('Support')}
            className={currentPage === 'Support' ? 'nav-link active' : 'nav-link'}
          >
            Support
          </a>
        </li>
        <li className="nav-item active mx-2">
          <a
            href="#login"
            onClick={() => handlePageChange('Login')}
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
          >
            Login
          </a>
        </li>
        <li className="nav-item active mx-2">
          <a
            href="#signup"
            onClick={() => handlePageChange('Signup')}
            className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
          >
            Signup
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;