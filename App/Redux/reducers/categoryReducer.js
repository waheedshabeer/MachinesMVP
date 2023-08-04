const initialState = {
  categories: []
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    case "UPDATE_CATEGORY": {
      let categories = state.categories;
      categories = categories.map((item) => {
        if (item.key === action.payload.key) {
          return action.payload;
        }
        return item;
      });

      return {
        ...state,
        categories: [...categories]
      };
    }

    case "REMOVE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter((c) => c.key !== action.payload)
      };
    default:
      return state;
  }
};

export default categoryReducer;
