import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  Books: bookReducer,
  Categories: categoriesReducer,
});

const store = configureStore(rootReducer);

export default store;
