import "./App.css";
import AppHeader from "./components/AppHeader";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <NavBar />
      <MainContent />
    </>
  );
}

export default App;
