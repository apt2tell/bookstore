const ADD_BOOK = 'Bookstore-CMS/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookstore-CMS/books/REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
  },
  {
    id: 2,
    title: 'Treasure Island',
    author: 'Bernard Shaw',
  },
  {
    id: 3,
    title: 'Tempest',
    author: 'Sheakspeare',
  },
  {
    id: 4,
    title: 'Merchant of Venice',
    author: 'Sheakspeare',
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
