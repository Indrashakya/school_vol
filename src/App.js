import React, { useState } from 'react';
import Home from './Home';
import Support from './components/Support/Support'
import Login from '../src/components/login/Login'
import Signup from './components/signup/Signup'
import Reward from './components/reward/Reward'
import Nav from './Nav'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Support') {
      return <Support />;
    }
    if (currentPage === 'Reward') {
      return <Reward />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Signup') {
      return <Signup />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;
