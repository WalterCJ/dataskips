import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
import { exampleList } from "../utils/optionsList";

const initialStore = {
  csv:
    "25,Deli\n50,Produce\n75,Bakery\n100,General Merchandise\n125,Technology",
  template: `INSERT INTO categories
    (category_id, category_name)
    VALUES
    ({{1}}, '{{b}}');`,
  delimiter: { open: "{{", close: "}}" },
  output: "",
  examples: exampleList
};

const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools()
);

export default store;
