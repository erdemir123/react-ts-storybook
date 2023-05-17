import { useContext } from "react";
import "./App.css";
import ThemeProvider, { ThemeContext } from "./Context/ThemeProvider";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
