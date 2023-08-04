const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case "REMOVE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter((c) => c.key !== action.payload),
      };
    default:
      return state;
  }
};

export default categoryReducer;
