import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeProvider from "./Context/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
