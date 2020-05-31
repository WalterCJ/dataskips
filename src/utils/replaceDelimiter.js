const replaceDelimiter = (template, prevDelimiter, newDelimiter) => {
  template = replaceAll(template, prevDelimiter.open, newDelimiter.open);
  template = replaceAll(template, prevDelimiter.close, newDelimiter.close);
  return template;
};
const replaceAll = function (str, search, replacement) {
  return str.replace(new RegExp(search, "g"), replacement);
};
export default replaceDelimiter;
