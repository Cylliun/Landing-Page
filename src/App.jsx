import React from "react";
import GlobalStyle from "./styled";
import Header from "./components/Header/header";
import Main from "./components/Section/main"
import Main2 from "./components/Section/main2";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Main2/>
    </>
  );
}

export default App;
