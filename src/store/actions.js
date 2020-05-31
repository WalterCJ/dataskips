import Papa from "papaparse";
import TemplateEngine from "../utils/TemplateEngine";

const parseData = (template, data, delimiter) => {
  const result = Papa.parse(data, { skipEmptyLines: true });
  return TemplateEngine(template, result.data, delimiter);
};

export const changeData = (csv) => ({
  type: "CHANGE_DATA",
  payload: csv,
});

export const changeTemplate = (template) => ({
  type: "CHANGE_TEMPLATE",
  payload: template,
});

export const changeOutput = (template, data, delimiter) => {
  const output = parseData(template, data, delimiter);
  return {
    type: "CHANGE_OUTPUT",
    payload: output,
  };
};

export const changeDelimiter = (delimiter) => ({
  type: "CHANGE_DELIMITER",
  payload: delimiter,
});
