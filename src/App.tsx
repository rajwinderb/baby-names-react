import "./App.css";
import { useState } from "react";
import AppHeader from "./components/AppHeader";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <>
      <AppHeader />
      <NavBar searchText={searchText} handleSearchText={setSearchText} />
      <MainContent searchText={searchText} />
    </>
  );
}

export default App;
