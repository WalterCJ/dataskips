const initialState = {
  csv: [],
  template: "",
};

const converter = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_TEMPLATE":
    case "CHANGE_DATA":
      return [...state];
    default:
      return state;
  }
};

export default converter;
