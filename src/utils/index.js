const TemplateEngine = function (
  templ,
  data,
  delimiter = { open: "<%", close: "%>" }
) {
  const regex = expression(delimiter);
  const outputData = data.reduce((acc, currData) => {
    return acc + interpolate(regex, templ, currData) + "\n";
  }, "");
  return outputData;
};

const expression = (d) => {
  return new RegExp(`${d.open}([^${d.close}]+)?${d.close}`);
};

const interpolate = (re, templ, data) => {
  let match;
  while ((match = re.exec(templ))) {
    templ = templ.replace(match[0], data[+match[1] - 1]);
  }
  return templ;
};

export default TemplateEngine;
