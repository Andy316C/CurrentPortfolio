import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './content/Me';
import Portfolio from './content/Portfolio';
import Resume from './content/Resume';
import Contact from './content/Contact';
import Footer from './content/Footers';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Home />;
  };

  const renderFooter = () => {
    
    return <Footer />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      {renderFooter()}
    </div>
  );
}
