import React from "react";
import Page from "./Layout/Page";
import Sidebar from "./Layout/Sidebar";
import Converter from "./Layout/Converter";

function App() {
  return (
    <Page>
      <Sidebar />
      <Converter />
    </Page>
  );
}

export default App;
