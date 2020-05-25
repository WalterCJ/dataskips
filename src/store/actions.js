export const changeData = (csv) => ({
  type: "CHANGE_DATA",
  csv,
});

export const changeTemplate = (template) => ({
  type: "CHANGE_TEMPLATE",
  template,
});
