export const addCategory = (category) => {
  return {
    type: "ADD_CATEGORY",
    payload: category,
  };
};

export const removeCategory = (key) => {
  return {
    type: "REMOVE_CATEGORY",
    payload: key,
  };
};
