import React from 'react';
import Book from './Book';
import Form from './Form';

const lists = [
  {
    id: 1,
    title: 'Book Title',
    author: 'Author',
  },
  {
    id: 2,
    title: 'Book Title',
    author: 'Author',
  },
  {
    id: 3,
    title: 'Book Title',
    author: 'Author',
  },
];

const Books = () => (
  <div>
    {lists.map((list) => <Book key={list.id} title={list.title} author={list.author} />)}
    <Form />
  </div>
);

export default Books;
