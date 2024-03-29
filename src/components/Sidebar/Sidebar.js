import React, { useEffect } from "react";
import { ReactComponent as Image } from "./assets/image.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { connect } from "react-redux";
import Input from "../UI/Input";
import {
  changeDelimiter,
  changeOutput,
  changeTemplate,
  changeExample,
} from "../../store/actions";
import replaceDelimiter from "../../utils/replaceDelimiter";
import { delimiterList } from "../../utils/optionsList";

function Sidebar({
  changeDelimiter,
  changeOutput,
  changeTemplate,
  changeExample,
  csvData,
  template,
  delimiter,
  examples,
}) {
  const examplesInput = {
    elementType: "select",
    elementConfig: {
      options: examples,
    },
  };
  const delimiterInput = {
    elementType: "select",
    elementConfig: {
      options: delimiterList,
    },
  };
  const handleInputChange = (e) => {
    if (e.target.name === "delimiter") {
      const newDelimiter = JSON.parse(e.target.value);
      const newTemplate = replaceDelimiter(template, delimiter, newDelimiter);
      changeDelimiter(newDelimiter);
      changeTemplate(newTemplate);
    } else {
      changeExample(e.target.value);
    }
  };

  useEffect(() => {
    changeOutput(template, csvData, delimiter);
  }, [csvData, template, delimiter]);
  return (
    <div className="justify-center p-12 md:p-5 md:w-7/12 bg-white">
      <div className="md:w-full lg:w-5/6 xl:max-w-sm mx-auto hidden md:block">
        <Image />
      </div>
      <div className="flex items-center justify-center mt-4">
        <span className="h-10 w-10 md:h-8 md:w-8">
          <Logo />
        </span>
        <span className="font-bold text-2xl md:text-2xl lg:text-3xl text-red-500 pl-4">
          DataSkips
        </span>
      </div>
      <div className="pl-0 flex flex-col items-center">
        <h1 className="font-light text-lg mt-6 md:text-center">
          Transform your tabular data!
        </h1>
        <div className="block relative w-3/4 md:w-1/2 mt-10">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="delimiter"
            >
              Delimiter
            </label>
            <Input
              id={"delimiter"}
              name={"delimiter"}
              elementConfig={delimiterInput.elementConfig}
              value={JSON.stringify(delimiter)}
              elementType={delimiterInput.elementType}
              onChange={handleInputChange}
            />
            <div className="pointer-events-none absolute inset-y-0 pt-8 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="block relative w-3/4 md:w-1/2 mt-10">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="examples"
            >
              Examples
            </label>
            <Input
              id={"examples"}
              name={"examples"}
              elementConfig={examplesInput.elementConfig}
              value={examples.value}
              elementType={examplesInput.elementType}
              onChange={handleInputChange}
            />
            <div className="pointer-events-none absolute inset-y-0 pt-8 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  csvData: state.csv,
  template: state.template,
  delimiter: state.delimiter,
  examples: state.examples,
});
export default connect(mapStateToProps, {
  changeDelimiter,
  changeOutput,
  changeTemplate,
  changeExample,
})(Sidebar);
