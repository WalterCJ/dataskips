const TemplateEngine = function (templ, data) {
  const re = /<%([^%>]+)?%>/;
  const outputData = data.reduce((acc, currData) => {
    return acc + interpolate(re, templ, currData) + "\n";
  }, "");
  return outputData;
};

const interpolate = (re, templ, data) => {
  let match;
  while ((match = re.exec(templ))) {
    templ = templ.replace(match[0], data[+match[1] - 1]);
  }
  return templ;
};

export default TemplateEngine;
