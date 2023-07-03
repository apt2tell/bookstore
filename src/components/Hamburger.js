import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BiMenu className="hamburger-icon" onClick={handleClick} />
      {isOpen && (
        <div className="pop-menu">
          <h1>Bookstore</h1>
          <ul>
            <li>
              <Link to="/">
                Books
              </Link>
            </li>
            <li>
              <Link to="./Categories">
                Categories
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Hamburger;
