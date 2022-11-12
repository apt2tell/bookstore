import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook, getBooks } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  // handle Add book
  const handleAddBook = (e) => {
    e.preventDefault();
    const book = {
      id: nanoid(),
      title,
      author,
      category: '',
    };
    dispatch(addBook(book));
    dispatch(getBooks());
  };

  // setTitle handler
  const handleChangeTitle = (e) => (setTitle(e.target.value));

  // setAuthor handler
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={handleAddBook} className="form">
      <p className="add-book">ADD NEW BOOK</p>
      <div className="form-input">
        <input onChange={handleChangeTitle} type="text" placeholder="Book title" className="book-title" />
        <input onChange={handleChangeAuthor} type="text" placeholder="Author" className="author-name" />
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;
