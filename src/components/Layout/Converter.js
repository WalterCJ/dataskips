import React from "react";
import { connect } from "react-redux";
import { changeData, changeTemplate } from "../../store/actions";

const Converter = ({ changeData, changeTemplate, csvData, template }) => {
  const handleInputChange = (e) => {
    if (e.target.name === "csvdata") {
      changeData(e.target.value);
    } else {
      changeTemplate(e.target.value);
    }
  };

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
          <textarea name="textarea-csv" rows="5"></textarea>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  csvData: state.csv,
  template: state.template,
});

export default connect(mapStateToProps, { changeData, changeTemplate })(
  Converter
);
