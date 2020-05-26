const initialState = {
  csv: "",
  template: "",
  output: "",
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
    case "CHANGE_OUTPUT":
      return {
        ...state,
        output: payload,
      };
    default:
      return state;
  }
};

export default converter;
