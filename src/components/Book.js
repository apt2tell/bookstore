import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Book = ({ title, author }) => (
  <div className="wrapper">
    <div className="title">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">Comments</button>
      <button type="button">Remove</button>
      <button type="button">Edit</button>
    </div>
    <div className="meter">
      <div>
        <h2>64%</h2>
        <p>Completed</p>
      </div>
    </div>
    <div className="chapter">
      <p>CURRENT CHAPTER</p>
      <p>Chapter 7</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>

  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
