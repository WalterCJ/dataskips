export const changeData = (csv) => ({
  type: "CHANGE_DATA",
  payload: csv,
});

export const changeTemplate = (template) => ({
  type: "CHANGE_TEMPLATE",
  payload: template,
});

export const changeOutput = (output) => ({
  type: "CHANGE_OUTPUT",
  payload: output,
});

export const changeDelimiter = (delimiter) => ({
  type: "CHANGE_DELIMITER",
  payload: delimiter,
});
