import React, { useState } from "react";

export default function Converter() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    console.log(e.currentTarget.name, e.currentTarget.value);
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const { csvData, tempalte } = formData;
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
            value={tempalte}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="card">
        <div className="card--content">
          <textarea
            placeholder="hello world"
            name="textarea-csv"
            rows="5"
          ></textarea>
        </div>
      </div>
    </form>
  );
}
