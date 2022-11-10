import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

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
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  // setTitle handler
  const handleChangeTitle = (e) => (setTitle(e.target.value));

  // setAuthor handler
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={handleAddBook} className="form">
      <input onChange={handleChangeTitle} type="text" placeholder="Book title" />
      <input onChange={handleChangeAuthor} type="text" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;
