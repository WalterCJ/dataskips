export const changeData = (csv) => ({
  type: "CHANGE_DATA",
  payload: csv,
});

export const changeTemplate = (template) => ({
  type: "CHANGE_TEMPLATE",
  payload: template,
});
