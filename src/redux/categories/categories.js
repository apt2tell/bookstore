const CHECK_STATUS = 'bookstore-CMS/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({
  type: 'CHECK_STATUS',
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export default categoriesReducer;
