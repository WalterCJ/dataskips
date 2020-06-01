import { exampleList } from "../utils/optionsList";
const initialState = {
  csv: "",
  template: "- <% 1 %> and <% 2 %>",
  delimiter: { open: "<%", close: "%>" },
  output: "",
  examples: exampleList,
};

const converter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_DELIMITER":
      return {
        ...state,
        delimiter: payload,
      };
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
    case "CHANGE_EXAMPLE":
      return {
        ...state,
        delimiter: exampleList[payload].delimiter,
        template: exampleList[payload].template,
        csv: exampleList[payload].csv,
      };
    default:
      return state;
  }
};

export default converter;
