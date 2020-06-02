import React from "react";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import Converter from "./Converter";

function App() {
  return (
    <Layout>
      <Sidebar />
      <Converter />
    </Layout>
  );
}

export default App;
