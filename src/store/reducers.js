const initialState = {
  csv: "",
  template: "",
};

const converter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_TEMPLATE":
      return {
        ...state,
        template: payload,
      };
    case "CHANGE_DATA":
      return {
        ...state,
        csv: payload,
      };
    default:
      return state;
  }
};

export default converter;
