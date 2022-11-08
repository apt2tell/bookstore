const initialState = [];

export const checkStatus = () => ({
  type: 'CHECK_STATUS',
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return [...state, 'IN_PROGRESS'];

    default:
      return state;
  }
};

export default categoriesReducer;
