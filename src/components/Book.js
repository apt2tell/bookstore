import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  // handler for remove book
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
    dispatch(getBooks());
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="title">
          <h2>{title}</h2>
          <p className="author">{author}</p>
          <button type="button">Comments</button>
          <button onClick={() => handleRemoveBook(id)} type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
        <div className="meter">
          <div className="circle" />
          <div className="percent">
            <p className="progress">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="chapter">
          <p className="current">CURRENT CHAPTER</p>
          <p className="seven">Chapter 7</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
