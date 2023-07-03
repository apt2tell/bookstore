const ADD_BOOK = 'Bookstore-CMS/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookstore-CMS/books/REMOVE_BOOK';
const GET_BOOK = 'Bookstore-CMS/books/GET_BOOK';

const initialState = [];

const getBooksAPI = async () => {
  const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BzBpsEmTlbs5StIYAEEm/books';
  const resp = await fetch(API, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const booksArray = await resp.json();
  console.log();
  const books = Object.keys(booksArray).map((id) => ({
    id,
    title: booksArray[id][0].title,
    author: booksArray[id][0].author,
  }));
  return books;
};

// getBooks action dispatcher
export const getBooks = () => (async (dispatch) => {
  const books = await getBooksAPI();
  dispatch({ type: GET_BOOK, payload: books });
});

// addBooks to API handler
const addBooksAPI = async ({
  id, title, author, category,
}) => {
  const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BzBpsEmTlbs5StIYAEEm/books';
  const data = await fetch(API, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  await data.text();
};

// addBooks action dispatcher
export const addBook = (book) => (async (dispatch) => {
  await addBooksAPI(book);
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
});

// removeBook API handler
const removeBookAPI = async (id) => {
  const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BzBpsEmTlbs5StIYAEEm/books';
  const data = await fetch(`${API}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  await data.text();
};

// removeBook action dispatcher
export const removeBook = (id) => (async (dispatch) => {
  await removeBookAPI(id);
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case GET_BOOK:
      return action.payload;

    default:
      return state;
  }
};

export default bookReducer;
