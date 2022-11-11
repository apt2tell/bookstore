import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  // Use effect for getBook dispatcher
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </div>
      <Form />
    </>
  );
};

export default Books;
