import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeData, changeTemplate, changeOutput } from "../../store/actions";

const Converter = ({
  changeData,
  changeTemplate,
  changeOutput,
  csvData,
  template,
  delimiter,
  output,
}) => {
  const handleInputChange = (e) => {
    if (e.target.name === "csvdata") {
      changeData(e.target.value);
    } else {
      changeTemplate(e.target.value);
    }
  };

  useEffect(() => {
    changeOutput(template, csvData, delimiter);
  }, [csvData, template, delimiter]);

  return (
    <form className="mainForm">
      <div className="card">
        <div className="card--content">
          <textarea
            rows="5"
            name="csvdata"
            value={csvData}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="card">
        <div className="card--content">
          <textarea
            rows="5"
            name="template"
            value={template}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="card">
        <div className="card--content">
          <textarea name="output" rows="5" value={output} readOnly></textarea>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  csvData: state.csv,
  template: state.template,
  delimiter: state.delimiter,
  output: state.output,
});

export default connect(mapStateToProps, {
  changeData,
  changeTemplate,
  changeOutput,
})(Converter);
